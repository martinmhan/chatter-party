import React from 'react';
import Row from './Row.jsx';

const Grid = ({ grid, room, handleKeyDown }) => (
  <div className="grid" tabIndex="0" onKeyDown={handleKeyDown}>
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

export default Grid;
