import React from 'react';

const Plant = (props) => (
  <div className="item">
    <img className="itemimg" src={props.url} />
  </div>
);

export default Plant;