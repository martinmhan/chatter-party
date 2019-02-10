import React from 'react';

const UsernameModal = ({ setUsername, updateGameState }) => (
  <div className="usernamemodal">
    <div className="usernamemodalcontent">
      Welcome to World of WalkCraft!<br/><br/>
      You can walk around the map with the arrow keys and chat with your friends.<br/><br/>
      First, please enter your username.<br/><br/>
      <input id="usernameinput" type="text" placeholder="Username" maxLength="12"></input>
      <button className="letsplaybtn" onClick={ () => {
        setUsername(document.getElementById('usernameinput').value);
        updateGameState('gameplay');
      }}>Let's Play!</button>
    </div>
  </div>
);

export default UsernameModal;
