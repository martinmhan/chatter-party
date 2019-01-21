import React from 'react';
import CharacterContainer from './CharacterContainer.jsx';

const Cell = (props) => (
  <div className="cell">
    { props.cell ? <CharacterContainer cell={props.cell} /> : null }
  </div>
);

export default Cell;
