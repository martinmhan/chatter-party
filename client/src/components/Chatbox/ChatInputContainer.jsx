import React from 'react';

const ChatInputContainer = ({ updateCurrentMessage, sendChatMessage, currentMessage }) => (
  <div className="chatinputcontainer">
    <textarea
      id="chatinput"
      className="chatinput"
      type="text"
      placeholder="Enter chat message here"
      onChange={ e => { updateCurrentMessage(e.target.value); }}
    />
    <button
      className="chatsubmitbtn"
      onClick={ () => { sendChatMessage(currentMessage); }}
    >Submit Chat</button>
  </div>
);

export default ChatInputContainer;
