import React from 'react';

// list map objects larger than one square here
const divClassNames = {
  pokecenter: 'pokecenter',
  house1: 'house1',
};

const Item = (props) => {
  const divClassName = divClassNames[props.itemType] || 'item';
  const imgClassName = divClassNames[props.itemType] ? null : 'itemimg';

  return (
    <div className={divClassName}>
      <img className={imgClassName} src={props.url} />
    </div>
  );
}

export default Item;
