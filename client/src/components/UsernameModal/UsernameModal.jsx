import React from 'react';
import PropTypes from 'prop-types';

const UsernameModal = ({ setUsername, updateGameState }) => (
  <div className="usernamemodal">
    <div className="usernamemodalcontent">
      Welcome to World of WalkCraft!
      <br />
      <br />
      You can walk around the map with the arrow keys and chat with your friends.
      <br />
      <br />
      First, please enter your username.
      <br />
      <br />
      <input id="usernameinput" type="text" placeholder="Username" maxLength="12" />
      <button
        type="button"
        className="letsplaybtn"
        onClick={() => {
          setUsername(document.getElementById('usernameinput').value);
          updateGameState('gameplay');
        }}
      >
        Let's Play!
      </button>
    </div>
  </div>
);

UsernameModal.propTypes = {
  setUsername: PropTypes.func.isRequired,
  updateGameState: PropTypes.func.isRequired,
};

export default UsernameModal;
