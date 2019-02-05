import React, { Component } from 'react';
import Character from './Character.jsx';

const CharacterContainer = (props) => (
  <div className="charactercontainer">
    <Character cell={props.cell} /> 
  </div>
);

export default CharacterContainer;
