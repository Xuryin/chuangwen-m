import React from 'react';
import './index.styl';
import { formatNumber } from '@/utils/func';

const TextItem = (props) => {
  const { className, children, data } = props;
  let classNames = `text-item-container ${className}`;

  return (
    <div className={classNames}>
      <div className={ children ? "text-item-title text-item-title-children" : "text-item-title"}>{ data && data.name }</div>
      <div className="text-item-num">{ formatNumber(data && data.num || 0) }</div>
      {
        children
      }
    </div>
  );
}

export default TextItem;