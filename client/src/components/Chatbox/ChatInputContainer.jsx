import React from 'react';
import PropTypes from 'prop-types';

const ChatInputContainer = ({ updateCurrentMessage, sendChatMessage, currentMessage }) => (
  <div className="chatinputcontainer">
    <textarea
      id="chatinput"
      className="chatinput"
      type="text"
      placeholder="Enter chat message here"
      onChange={(e) => { updateCurrentMessage(e.target.value); }}
    />
    <button
      type="button"
      className="chatsubmitbtn"
      onClick={() => { sendChatMessage(currentMessage); }}
    >
      Submit Chat
    </button>
  </div>
);

ChatInputContainer.propTypes = {
  updateCurrentMessage: PropTypes.func.isRequired,
  sendChatMessage: PropTypes.func.isRequired,
  currentMessage: PropTypes.string.isRequired,
};

export default ChatInputContainer;
