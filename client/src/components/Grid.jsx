import React from 'react';
import Row from './Row.jsx';

const Grid = (props) => (
  <div className="grid" tabIndex="0" onKeyDown={props.handleKeyDown}>
    {!props.grid ? null : props.grid.map((row, rowIndex) => (
      <Row 
        row={row}
        rowIndex={rowIndex}
        key={rowIndex}
      />
    ))}
  </div>
);

export default Grid;
