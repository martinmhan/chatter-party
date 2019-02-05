import React, { Component } from 'react';
import io from 'socket.io-client';
import Grid from './Grid/Grid.jsx';
import Chatbox from './Chat/Chatbox.jsx';

export class App extends Component {
  constructor() {
    super();
    this.socket = null;
    this.rows = null;
    this.cols = null;
    this.clientId = null;
    this.state = {
      grid: null,
      currRow: null,
      currCol: null,
      room: null,
      chats: [],
    };
  }

  componentWillMount() {
    this.socket = io('localhost:3000');

    this.socket.on('connect', () => { console.log('Connected to websocket server'); });

    this.socket.on('newClientInfo', ({ room, rows, cols, clientId }) => {
      this.rows = rows;
      this.cols = cols;
      this.clientId = clientId;
      const character = {
        itemType: 'character',
        clientId: this.clientId,
        spritePos: [0, 0],
      };
      this.socket.emit('addCharacter', character);
      this.setState({ room });
    });

    this.socket.on('grid', (grid) => { this.setState({ grid }); });
    this.socket.on('roomSwitch', (room) => { this.setState({ room }); });
    this.socket.on('characterCoords', ({ row, col }) => { this.setState({ currRow: row, currCol: col }); });
    this.socket.on('message', (data) => { console.log(data); });
    this.socket.on('disconnect', () => { console.log('Disconnected from socket'); });
  };

  handleKeyDown = (e) => {
    e.preventDefault();
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      this.moveCharacter(e.key);
    }
  };

  moveCharacter = (directionKey) => {
    let character = this.state.grid[this.state.currRow][this.state.currCol];
    let endSpritePos = character.spritePos;
    let endRow = this.state.currRow, endCol = this.state.currCol;

    if (directionKey === 'ArrowUp') {
      endRow = Math.max(0, endRow - 1);
      endSpritePos = endSpritePos[0] !== 1
        ? [1, 0]
        : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    } else if (directionKey === 'ArrowDown') {
      endRow = Math.min(this.rows - 1, endRow + 1);
      endSpritePos = endSpritePos[0] !== 0
        ? [0, 0]
        : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    } else if (directionKey === 'ArrowLeft') {
      endCol = Math.max(0, endCol - 1);
      endSpritePos = endSpritePos[0] !== 2
        ? [2, 0]
        : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    } else if (directionKey === 'ArrowRight') {
      endCol = Math.min(this.cols - 1, endCol + 1);
      endSpritePos = endSpritePos[0] !== 3
        ? [3, 0]
        : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    }

    this.socket.emit('moveCharacter', {
      room: this.state.room,
      startRow: this.state.currRow,
      startCol: this.state.currCol,
      endRow,
      endCol,
      endSpritePos,
    });
  };

  render = () => (
    <div id="app">
      <div id="gamecontainer">
        <Grid
          grid={this.state.grid}
          handleKeyDown={this.handleKeyDown}
        />
      </div>
      <div className="chatcontainer">
        <Chatbox chats={this.state.chats} />
      </div>
    </div>
  );
}
