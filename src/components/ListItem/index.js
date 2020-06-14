import React from 'react';
import './index.styl';

const ListItem = (props) => {
  const { className, data } = props;
  let classNames = `list-item-container ${className}`;

  return (
    <div className={classNames}>
      <div className="list-item-header">
        <div className="item-header-title">{ data && data.name }</div>
        <div className="item-header-info">
          <span className="item-header-info-num">{ data && data.num }</span>
          <span className="item-header-info-unit">{ data && data.unit }</span>
        </div>
      </div>
      <div className="list-item-content">
        <div className="item-content-label">更新时间</div>
        <div className="item-content-span">{ data && data.time }</div>
      </div>
    </div>
  );
}

export default ListItem;