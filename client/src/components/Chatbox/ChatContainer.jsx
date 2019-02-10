import React from 'react';
import ChatMessagesBox from './ChatMessagesBox.jsx';
import ChatInputContainer from './ChatInputContainer.jsx';

const ChatContainer = ({ chatMessages, updateCurrentMessage, sendChatMessage, currentMessage }) => (
  <div className="chatcontainer">
    <ChatMessagesBox
      chatMessages={chatMessages}
    />
    <ChatInputContainer
      updateCurrentMessage={updateCurrentMessage}
      sendChatMessage={sendChatMessage}
      currentMessage={currentMessage}
    />
  </div>
);

export default ChatContainer;
