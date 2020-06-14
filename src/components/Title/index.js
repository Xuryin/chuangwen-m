import React from 'react';
import './index.styl';

const Title = (props) => {
  const { text, color } = props;

  return (
    <div className="title-container">
      <div className="title-status" style={{ backgroundColor: color }}></div>
      <div className="title-text">{ text }</div>
    </div>
  );
}

export default Title;