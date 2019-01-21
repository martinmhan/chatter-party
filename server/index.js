const http = require('http');
const socketIo = require('socket.io');
const app = require('./app.js');

const PORT = 3000;

const server = http.createServer(app);
const io = socketIo(server);

const rows = 16;
const cols = 20;
const grid = [];
for (let i = 0; i < rows; i += 1) {
  const row = [];
  for (let j = 0; j < cols; j += 1) { row.push(null); }
  grid.push(row);
}

// place items in map
grid[10][10] = { itemType: 'plant' };
grid[12][12] = { itemType: 'well' };
for (let i = 14; i < 17; i += 1) {
  grid[14][i] = { itemType: 'rock' };
}

// one pokecenter takes up more than one square - use fillers
for (let i = 6; i < 8; i += 1) {
  for (let j = 8; j < 11; j += 1) {
    if (i === 6 && j === 8) {
      grid[i][j] = { itemType: 'pokecenter' };
    } else {
      grid[i][j] = { itemType: 'filler' };
    }
  }
}

io.on('connection', (client) => {
  // initial info to send as soon as a new client connects to web socket
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

      io.emit('grid', grid); // send new grid to all clients
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
