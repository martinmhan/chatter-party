import React from 'react';
import PropTypes from 'prop-types';
import ChatMessagesBox from './ChatMessagesBox';
import ChatInputContainer from './ChatInputContainer';

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

ChatContainer.propTypes = {
  chatMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCurrentMessage: PropTypes.func.isRequired,
  sendChatMessage: PropTypes.func.isRequired,
  currentMessage: PropTypes.string.isRequired,
};

export default ChatContainer;
