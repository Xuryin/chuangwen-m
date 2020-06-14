import React from 'react';
import './index.styl';

const ContentBox = (props) => {
  const { className, children } = props;
  let classNames = `content-box-container ${className}`;

  return (
    <div className={classNames}>
      {
        children
      }
    </div>
  );
}

export default ContentBox;