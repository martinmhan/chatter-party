import React from 'react';
import PropTypes from 'prop-types';
import CharacterContainer from '../MapObjects/CharacterContainer';
import Item from '../MapObjects/Item';

const itemUrls = {
  tree1: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile1.png',
  tree2: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile2.png',
  tree3: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile3.png',
  plant1: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plant_tile1.png',
  plant2: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plant_tile2.png',
  plant3: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plant_tile3.png',
  plants: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plants_tile.png',
  cabinet1: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/cabinet_tile.png',
  computer: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/computer_tile.png',
  rock: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/rock_tile.png',
  sign: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/sign_tile1.png',
  pokecenter: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/pokecenter_tile.png',
  house1: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/house_tile1.png',
  stump: 'https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/stump_tile1.png',
};

const Cell = ({ cell, rowIndex, room }) => {
  const classNames = ['cell'];
  const background = room === 'mapp' ? 'pokecenterfloor' : 'grass'; 

  if (!cell) { classNames.push(background); }
  else if (cell.itemType !== 'border' && cell.itemType.slice(0, 8) !== 'entrance') {
    classNames.push(background);
  }

  return (
    <div className={classNames.join(' ')}>
      {
        !cell ? null
        : itemUrls[cell.itemType] ? <Item url={itemUrls[cell.itemType]} rowIndex={rowIndex} itemType={cell.itemType} />
        : cell.itemType === 'character' ? <CharacterContainer cell={cell} />
        : null
      }

      {/* { cell
        ? itemUrls[cell.itemType]
          ? <Item url={itemUrls[cell.itemType]} rowIndex={rowIndex} itemType={cell.itemType} />
          : cell.itemType === 'character' ? <CharacterContainer cell={cell} />
            : null
        : null
      } */}
    </div>
  );
};

Cell.propTypes = {
  cell: PropTypes.objectOf(PropTypes.any).isRequired,
  rowIndex: PropTypes.number.isRequired,
  room: PropTypes.string.isRequired,
};

export default Cell;
