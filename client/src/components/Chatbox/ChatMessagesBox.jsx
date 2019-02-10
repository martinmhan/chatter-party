import React from 'react';
import ChatMessage from './ChatMessage.jsx';

const ChatMessagesBox = ({ chatMessages }) => (
  <div className="chatmessagesbox">
    {chatMessages.map((message, i) => (
      <ChatMessage message={message} key={i} />
    ))}
  </div>
);

export default ChatMessagesBox;
