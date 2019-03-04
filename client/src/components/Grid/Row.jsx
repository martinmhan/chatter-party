import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = ({ room, row, rowIndex}) => (
  <div className="row">
    {row.map((cell, colIndex) => (
      <Cell
        cell={cell}
        rowIndex={rowIndex}
        colIndex={colIndex}
        key={colIndex}
        room={room}
      />
    ))}
  </div>
);

Row.defaultProps = {
  room: null,
};

Row.propTypes = {
  room: PropTypes.string,
  row: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
};

export default Row;
