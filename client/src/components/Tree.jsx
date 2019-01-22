import React from 'react';

const Tree = (props) => {
  const num = props.rowIndex%3 + 1;
  return (
    <div className="tree">
      <img className="itemimg" src={`https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile${num}.png`} />
    </div>
  );
};

export default Tree;
