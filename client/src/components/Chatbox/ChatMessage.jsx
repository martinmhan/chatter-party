import React from 'react';

const ChatMessage = ({ message }) => (
  <div className="chatmessage">
    {`${message.username}: ${message.messageText}`}
  </div>
);

export default ChatMessage;
