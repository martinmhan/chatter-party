const http = require('http');
const socketIo = require('socket.io');
const app = require('./app.js');

const PORT = 3000;

const server = http.createServer(app);
const io = socketIo(server);

const main = [
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

const pokecenter = [
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

const rows = main.length;
const cols = main[0].length;
const map = {
  tr: 'tree',
  pc: 'pokecenter',
  fi: 'filler',
  ro: 'rock',
};

for (let i = 0; i < main.length; i += 1) {
  for (let j = 0; j < main[i].length; j += 1) {
    if (main[i][j] !== null) {
      main[i][j] = { itemType: map[main[i][j]] };
    }
  }
}

io.on('connection', (client) => {
  // identify client's current room and set to room
  const room = main;
  client.emit('grid', room);
  client.emit('newClientInfo', { rows, cols, clientId: client.id });

  // const clients = Object.keys(io.sockets.sockets); // list of connected clients

  client.on('addCharacter', (character) => { // find first available tile and place new client's character there
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        if (!room[i][j]) {
          room[i][j] = character;
          client.emit('characterCoords', { row: i, col: j });
          io.emit('grid', room);
          return;
        }
      }
    }
  });

  client.on('moveCharacter', ({ startRow, startCol, endRow, endCol, endSpritePos }) => {
    const character = room[startRow][startCol];
    if (character) { // websocket was occasionally crashing - hedge with this condition
      character.spritePos = endSpritePos;

      if (!room[endRow][endCol]) {
        room[startRow][startCol] = null;
        room[endRow][endCol] = character;
        client.emit('characterCoords', { row: endRow, col: endCol }); // send new character coords to client
      }

      io.emit('grid', room); // send updated grid to all clients
    }
  });

  client.on('message', (data) => {
    console.log('message from client: ', data);
  });

  client.on('disconnect', () => { // when client disconnects, remove their character from grid
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        if (room[i][j]) {
          if (room[i][j].clientId === client.id) {
            room[i][j] = null;
            io.emit('grid', room);
            return;
          }
        }
      }
    }
  });
});

server.listen(PORT, () => { console.log('Listening on PORT ', PORT); });
server.on('error', (err) => { console.error(err); });
