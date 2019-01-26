import React from 'react';
import Cell from './Cell.jsx';

const Row = (props) => (
  <div className="row">
    {props.row.map((cell, colIndex) => (
      <Cell
        cell={cell}
        rowIndex={props.rowIndex}
        colIndex={colIndex}
        key={colIndex}
      />
    ))}
  </div>
);

export default Row;
