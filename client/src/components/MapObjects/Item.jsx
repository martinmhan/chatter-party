import React from 'react';

const Item = (props) => (
  <div className="item">
    <img className="itemimg" src={props.url} />
  </div>
);

export default Item;