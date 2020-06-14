import React from 'react';
import './index.styl';
import { px2spx } from '@/utils/func';

const ScrollBox = (props) => {
  const { className, children, num } = props;
  let classNames = `scroll-box-container ${className}`;
  let w228 = px2spx(228);

  return (
    <div className={classNames}>
      {/* <div className="scroll-box-content"> */}
      {
        children
      }
      {/* </div> */}
    </div>
  );
}

export default ScrollBox;