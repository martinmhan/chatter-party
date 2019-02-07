import React from 'react';
import Cell from './Cell.jsx';

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

export default Row;
