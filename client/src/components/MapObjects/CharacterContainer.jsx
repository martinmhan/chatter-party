import React, { Component } from 'react';
import Character from './Character.jsx';

const CharacterContainer = ({ cell }) => (
  <div className="charactersupercontainer">
    <div className="characterusername">{cell.username}</div>
    <div className="charactercontainer">
      <Character cell={cell} />
    </div>
  </div>
);

export default CharacterContainer;
