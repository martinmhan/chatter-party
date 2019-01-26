const http = require('http');
const socketIo = require('socket.io');
const app = require('./app.js');

const PORT = 3000;

const server = http.createServer(app);
const io = socketIo(server);

const grid = [
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'tr', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'tr', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'tr', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'tr', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 'pc', 'fi', 'fi', null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 'fi', 'fi', 'fi', null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'ro', 'ro', 'ro', null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
];

const rows = grid.length;
const cols = grid[0].length;
const map = {
  tr: 'tree',
  pc: 'pokecenter',
  fi: 'filler',
  ro: 'rock',
};

for (let i = 0; i < grid.length; i += 1) {
  for (let j = 0; j < grid[i].length; j += 1) {
    if (grid[i][j] !== null) {
      grid[i][j] = { itemType: map[grid[i][j]] };
    }
  }
}

io.on('connection', (client) => {
  client.emit('grid', grid);
  client.emit('newClientInfo', { rows, cols, clientId: client.id });

  // const clients = Object.keys(io.sockets.sockets); // list of connected clients

  client.on('addCharacter', (character) => { // find first available tile and place new client's character there
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        if (!grid[i][j]) {
          grid[i][j] = character;
          client.emit('characterCoords', { row: i, col: j });
          io.emit('grid', grid);
          return;
        }
      }
    }
  });

  client.on('moveCharacter', ({ startRow, startCol, endRow, endCol, endSpritePos }) => {
    const character = grid[startRow][startCol];
    if (character) { // websocket was occasionally crashing - hedge with this condition
      character.spritePos = endSpritePos;

      if (!grid[endRow][endCol]) {
        grid[startRow][startCol] = null;
        grid[endRow][endCol] = character;
        client.emit('characterCoords', { row: endRow, col: endCol }); // send new character coords to client
      }

      io.emit('grid', grid); // send updated grid to all clients
    }
  });

  client.on('message', (data) => {
    console.log('message from client: ', data);
  });

  client.on('disconnect', () => { // when client disconnects, remove their character from grid
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        if (grid[i][j]) {
          if (grid[i][j].clientId === client.id) {
            grid[i][j] = null;
            io.emit('grid', grid);
            return;
          }
        }
      }
    }
  });
});

server.listen(PORT, () => { console.log('Listening on PORT ', PORT); });
server.on('error', (err) => { console.error(err); });
