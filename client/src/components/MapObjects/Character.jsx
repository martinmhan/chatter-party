import React from 'react';
import PropTypes from 'prop-types';

const Character = props => (
  <div className="character">
    <img
      alt=""
      src="https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/player_walk.png"
      style={{ transform: `translate(${0 - props.cell.spritePos[1] * 40}px, ${0 - props.cell.spritePos[0] * 40}px)` }}
    />
  </div>
);

Character.propTypes = {
  cell: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Character;
