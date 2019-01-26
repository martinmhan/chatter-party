import React from 'react';
import CharacterContainer from './CharacterContainer.jsx';
import Pokecenter from './Pokecenter.jsx';
import Item from './Item.jsx';

const itemUrls = {
  tree: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile1.png',
  plant: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plant_tile1.png',
  rock: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/rock_tile.png',
};

const Cell = (props) => (
  <div className="cell">
    { props.cell ?
        itemUrls[props.cell.itemType] ? <Item url={itemUrls[props.cell.itemType]} rowIndex={props.rowIndex} /> :
        props.cell.itemType === 'character' ? <CharacterContainer cell={props.cell} /> :
        props.cell.itemType === 'pokecenter' ? <Pokecenter /> : null
      : null }
  </div>
);

export default Cell;
