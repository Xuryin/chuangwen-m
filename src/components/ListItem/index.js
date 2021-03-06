import React from 'react';
import './index.styl';
import { formatNumber, formatTime } from '@/utils/func';

const ListItem = (props) => {
  const { className, data } = props;
  let classNames = `list-item-container ${className}`;

  return (
    <div className={classNames}>
      <div className="list-item-header">
        <div className="item-header-title">{ data && data.cw_type }</div>
        <div className="item-header-info">
          <span className="item-header-info-num">{ formatNumber(data && data.total || 0) }</span>
          <span className="item-header-info-unit">{ data && data.m_unit }</span>
        </div>
      </div>
      <div className="list-item-content">
        <div className="item-content-label">更新时间</div>
        <div className="item-content-span">{ formatTime(data && data.indicatorCycle) }</div>
      </div>
    </div>
  );
}

export default ListItem;