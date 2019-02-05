import React from 'react';
import CharacterContainer from '../MapObjects/CharacterContainer.jsx';
import Pokecenter from '../MapObjects/Pokecenter.jsx';
import Item from '../MapObjects/Item.jsx';

const itemUrls = {
  tree1: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile1.png',
  tree2: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile2.png',
  tree3: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile3.png',
  plant1: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plant_tile1.png',
  plant2: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plant_tile2.png',
  rock: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/rock_tile.png',
};

const Cell = (props) => {
  const classNames = ['cell'];
  if (!props.cell) {
    classNames.push('grass');
  } else if (props.cell.itemType === 'border' || props.cell.itemType.slice(0, 8) === 'entrance') {
    classNames.push(props.cell.itemType);
  } else {
    classNames.push('grass');
  }

  return (
    <div className={classNames.join(' ')}>
      { props.cell ?
          itemUrls[props.cell.itemType] ? <Item url={itemUrls[props.cell.itemType]} rowIndex={props.rowIndex} /> :
          props.cell.itemType === 'character' ? <CharacterContainer cell={props.cell} /> :
          props.cell.itemType === 'pokecenter' ? <Pokecenter /> : null
        : null }
    </div>
  );
};

export default Cell;
