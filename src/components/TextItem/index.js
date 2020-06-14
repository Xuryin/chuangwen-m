import React from 'react';
import './index.styl';

const TextItem = (props) => {
  const { className, children, data } = props;
  let classNames = `text-item-container ${className}`;

  return (
    <div className={classNames}>
      <div className={ children ? "text-item-title text-item-title-children" : "text-item-title"}>{ data && data.name }</div>
      <div className="text-item-num">{ data && data.num }</div>
      {
        children
      }
    </div>
  );
}

export default TextItem;