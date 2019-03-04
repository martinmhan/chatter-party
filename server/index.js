const http = require('http');
const socketIo = require('socket.io');
const app = require('./app.js');
const { map1, map1Rows, map1Cols } = require('./maps/map1');
const { map2 } = require('./maps/map2');
const { map3 } = require('./maps/map3');
const { map4 } = require('./maps/map4');
const { mapp } = require('./maps/mapp');
const { startingCoords } = require('./maps/roomStartingCoordinates');

const PORT = 4000;

const server = http.createServer(app);
const io = socketIo(server);

const roomsMap = { map1, map2, map3, map4, mapp };
const rows = map1Rows;
const cols = map1Cols;

io.on('connection', (client) => {
  client.join('map1'); // clients initially start in the map1
  client.emit('newClientInfo', { room: 'map1', rows, cols, clientId: client.id });
  client.emit('grid', map1);

  client.on('addCharacter', (character) => { // find first available tile and place new client's avatar
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        if (!map1[i][j]) { // new characters always start at map1
          map1[i][j] = character;
          client.emit('characterCoords', { row: i, col: j });
          io.to('map1').emit('grid', map1); // emit new grid to clients in map1
          return;
        }
      }
    }
  });

  client.on('moveCharacter', ({ room, startRow, startCol, endRow, endCol, endSpritePos }) => {
    const character = roomsMap[room][startRow][startCol];
    if (!character) { return; } // websocket occasionally errors/crashes - hedge here

    character.spritePos = endSpritePos;

    if (!roomsMap[room][endRow][endCol]) {
      roomsMap[room][startRow][startCol] = null;
      roomsMap[room][endRow][endCol] = character;
      client.emit('characterCoords', { row: endRow, col: endCol }); // send new character coords to client
    } else if (roomsMap[room][endRow][endCol].itemType.slice(0, 8) === 'entrance') {
      const oldRoom = room;
      const newRoom = roomsMap[room][endRow][endCol].itemType.replace('entrance to ', '');

      roomsMap[oldRoom][startRow][startCol] = null;
      client.leave(oldRoom);
      client.join(newRoom);

      for (let i = 0; i < startingCoords[oldRoom][newRoom].length; i += 1) {
        const row = startingCoords[oldRoom][newRoom][i][0];
        const col = startingCoords[oldRoom][newRoom][i][1];
        if (!roomsMap[newRoom][row][col]) {
          roomsMap[newRoom][row][col] = character;
          client.emit('roomSwitch', newRoom);
          client.emit('characterCoords', { row, col });
          io.to(newRoom).emit('grid', roomsMap[newRoom]);
          io.to(oldRoom).emit('grid', roomsMap[oldRoom]); // send updated grid to all clients in original room
          return;
        }
      }
    }

    io.to(room).emit('grid', roomsMap[room]);
  });

  client.on('chatMessage', (chatMessage) => {
    io.emit('chatMessage', chatMessage);
  });

  // when client disconnects, find character and remove from grid
  client.on('disconnect', () => {
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        for (let k = 0; k < Object.values(roomsMap).length; k += 1) {
          const room = Object.values(roomsMap)[k];
          if (room[i][j]) {
            if (room[i][j].clientId === client.id) {
              room[i][j] = null;
              io.to(Object.keys(roomsMap)[k]).emit('grid', room);
              return;
            }
          }
        }
      }
    }
  });

  client.on('message', (data) => { console.log('message from client: ', data); });
});

server.listen(PORT, () => { console.log('Listening on PORT ', PORT); });
server.on('error', (err) => { console.error(err); });
