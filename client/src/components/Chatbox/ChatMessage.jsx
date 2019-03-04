import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ message }) => (
  <div className="chatmessage">
    {`${message.username}: ${message.messageText}`}
  </div>
);

ChatMessage.propTypes = {
  message: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ChatMessage;
