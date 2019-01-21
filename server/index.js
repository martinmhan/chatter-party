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

io.on('connection', (client) => {
  // initial info to send as soon as a new client connects to web socket
  client.emit('grid', grid);
  client.emit('newClientInfo', { rows, cols, clientId: client.id });

  // list of clients currently connected to web socket
  const clients = Object.keys(io.sockets.sockets);

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
        client.emit('characterCoords', { row: endRow, col: endCol });
      }

      io.emit('grid', grid);
    }
  });

  client.on('message', (data) => {
    console.log('message from client: ', data);
  });

  client.on('disconnect', () => { // when client disconnects, remove their avatar from grid 
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
