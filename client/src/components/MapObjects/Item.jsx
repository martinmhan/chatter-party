import React from 'react';

const Item = (props) => {
  const divClassName = props.itemType === 'pokecenter'
    ? 'pokecenter'
    : 'item';

  const imgClassName = props.itemType === 'pokecenter'
    ? null
    : 'itemimg';

  return (
    <div className={divClassName}>
      <img className={imgClassName} src={props.url} />
    </div>
  );
}

export default Item;