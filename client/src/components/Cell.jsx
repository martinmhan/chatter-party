import React from 'react';
import CharacterContainer from './CharacterContainer.jsx';
import Plant from './Plant.jsx';
import Well from './Well.jsx';
import Rock from './Rock.jsx';
import Tree from './Tree.jsx';
import Pokecenter from './Pokecenter.jsx';

const Cell = (props) => (
  <div className="cell">
    { props.cell ?
        props.cell.itemType === 'character' ? <CharacterContainer cell={props.cell} /> :
        props.cell.itemType === 'plant' ? <Plant /> :
        props.cell.itemType === 'rock' ? <Rock /> :
        props.cell.itemType === 'tree' ? <Tree rowIndex={props.rowIndex} /> :
        props.cell.itemType === 'pokecenter' ? <Pokecenter /> :
        props.cell.itemType === 'well' ? <Well /> : null
    : null }
  </div>
);

export default Cell;
