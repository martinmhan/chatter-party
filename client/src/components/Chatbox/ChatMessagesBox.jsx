import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

const ChatMessagesBox = ({ chatMessages }) => (
  <div className="chatmessagesbox">
    {chatMessages.map((message, i) => (
      <ChatMessage message={message} key={i} />
    ))}
  </div>
);

ChatMessagesBox.propTypes = {
  chatMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatMessagesBox;
