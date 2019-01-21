import React, { Component } from 'react';
import io from 'socket.io-client';
import Grid from './Grid.jsx';

class App extends Component {
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
    };
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000');

    this.socket.on('connect', () => {
      console.log('Connected to websocket server');
    });

    this.socket.on('newClientInfo', ({ rows, cols, clientId }) => {
      this.rows = rows;
      this.cols = cols;
      this.clientId = clientId;
      const character = {
        characterType: 'character',
        clientId: this.clientId,
        spritePos: [0, 0],
      };
      this.socket.emit('addCharacter', character);
    });

    this.socket.on('grid', (grid) => {
      this.setState({ grid });
    });

    this.socket.on('characterCoords', ({ row, col }) => {
      this.setState({ currRow: row, currCol: col });
    });

    this.socket.on('message', (data) => {
      console.log(data);
    });
    
    this.socket.on('disconnect', () => {
      console.log('disconnected from socket');
    });
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
      endSpritePos = endSpritePos[0] !== 1 ?
        [1, 0] :
        [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    } else if (directionKey === 'ArrowDown') {
      endRow = Math.min(this.rows - 1, endRow + 1);
      endSpritePos = endSpritePos[0] !== 0 ?
        [0, 0] :
        [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    } else if (directionKey === 'ArrowLeft') {
      endCol = Math.max(0, endCol - 1);
      endSpritePos = endSpritePos[0] !== 2 ?
        [2, 0] :
        [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    } else if (directionKey === 'ArrowRight') {
      endCol = Math.min(this.cols - 1, endCol + 1);
      endSpritePos = endSpritePos[0] !== 3 ?
        [3, 0] :
        [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];
    }

    this.socket.emit('moveCharacter', {
      startRow: this.state.currRow,
      startCol: this.state.currCol,
      endRow,
      endCol,
      endSpritePos,
    });
  };

  render() {
    return (
      <div id="app">
        <div id="gamecontainer">
          <Grid
            grid={this.state.grid}
            handleKeyDown={this.handleKeyDown}
          />
        </div>
      </div>
    );
  };
}

export default App;
