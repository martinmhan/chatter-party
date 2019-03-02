import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterContainer = ({ cell }) => (
  <div className="charactersupercontainer">
    <div className="characterusername">{cell.username}</div>
    <div className="charactercontainer">
      <Character cell={cell} />
    </div>
  </div>
);

CharacterContainer.propTypes = {
  cell: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CharacterContainer;
