import React, { Component } from 'react';
import io from 'socket.io-client';
import Grid from './Grid/Grid';
import ChatContainer from './Chatbox/ChatContainer';
import UsernameModal from './UsernameModal/UsernameModal';

class App extends Component {
  constructor() {
    super();
    this.socket = null;
    this.rows = null;
    this.cols = null;
    this.clientId = null;
    this.state = {
      gameState: 'usernameinput', // possible values: usernameinput, gameplay
      username: null,
      grid: null,
      currRow: null,
      currCol: null,
      room: null,
      currentMessage: '',
      chatMessages: [],
    };
  }

  componentWillMount() {
    this.socket = io('http://localhost:4000');

    this.socket.on('connect', () => { console.log('Connected to websocket server'); });
    this.socket.on('newClientInfo', ({ room, rows, cols, clientId }) => {
      this.rows = rows;
      this.cols = cols;
      this.clientId = clientId;
      this.setState({ room });
    });

    this.socket.on('grid', (grid) => { this.setState({ grid }); });
    this.socket.on('roomSwitch', (room) => { this.setState({ room }); });
    this.socket.on('characterCoords', ({ row, col }) => { this.setState({ currRow: row, currCol: col }); });
    this.socket.on('message', (data) => { console.log(data); });
    this.socket.on('disconnect', () => { console.log('Disconnected from socket'); });
    this.socket.on('chatMessage', (newMessage) => {
      const chatMessages = [...this.state.chatMessages, newMessage];
      this.setState({ chatMessages });
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
    let endRow = this.state.currRow;
    let endCol = this.state.currCol;

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

  setUsername = (username) => {
    this.setState({ username }, () => {
      const character = {
        itemType: 'character',
        clientId: this.clientId,
        username: this.state.username,
        spritePos: [0, 0],
      };
      this.socket.emit('addCharacter', character);
    });
  }

  updateGameState = (gameState) => {
    this.setState({ gameState });
  };

  updateCurrentMessage = (currentMessage) => {
    this.setState({ currentMessage });
  };

  sendChatMessage = () => {
    this.socket.emit('chatMessage', { username: this.state.username, messageText: this.state.currentMessage });
    document.getElementById('chatinput').value = '';
  };

  render = () => (
    <div id="app">
      {
        this.state.gameState === 'usernameinput'
          ? <UsernameModal setUsername={this.setUsername} updateGameState={this.updateGameState} />
          : null
      }
      <h1>World of Walkcraft</h1>
      <div id="gamecontainer">
        <Grid
          grid={this.state.grid}
          room={this.state.room}
          handleKeyDown={this.handleKeyDown}
        />
        <ChatContainer
          chatMessages={this.state.chatMessages}
          updateCurrentMessage={this.updateCurrentMessage}
          sendChatMessage={this.sendChatMessage}
          currentMessage={this.state.currentMessage}
        />
      </div>
    </div>
  );
}

export default App;
