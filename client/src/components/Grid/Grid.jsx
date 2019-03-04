import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const Grid = ({ grid, room, handleKeyDown }) => (
  <div role="grid" className="grid" tabIndex="0" onKeyDown={handleKeyDown}>
    {!grid ? null : grid.map((row, rowIndex) => (
      <Row
        row={row}
        rowIndex={rowIndex}
        key={rowIndex}
        room={room}
      />
    ))}
  </div>
);

Grid.defaultProps = {
  grid: null,
  room: null,
  handleKeyDown: null,
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.array),
  room: PropTypes.string,
  handleKeyDown: PropTypes.func,
};

export default Grid;
