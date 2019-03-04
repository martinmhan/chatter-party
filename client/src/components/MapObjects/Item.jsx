import React from 'react';
import PropTypes from 'prop-types';

// list map objects larger than one square here
const divClassNames = {
  pokecenter: 'pokecenter',
  house1: 'house1',
};

const Item = ({ itemType, url }) => {
  const divClassName = divClassNames[itemType] || 'item';
  const imgClassName = divClassNames[itemType] ? null : 'itemimg';

  return (
    <div className={divClassName}>
      <img alt="" className={imgClassName} src={url} />
    </div>
  );
};

Item.propTypes = {
  itemType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Item;
