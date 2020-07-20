let bodyWidth = document.body.clientWidth;

/**
 * 将1920标准的像素转换成等比宽度的像素值
 */
function px2spx(px) {
  return px * bodyWidth / 750;
}

function getUUID() {
  return Math.random().toString(36).slice(-8);
}


/**
 * 数字格式化
 */
function formatNumber(number) {
  let reg = /^\d+(.\d+)?$/g;

  if(typeof number === 'number') {
    return number;
  }

  if(reg.test(number)) {
    return parseInt(number);
  }

  return 0;
}

/**
 * 时间格式化
 */
function formatTime(str) {
  if(!str) return '';
  str = str + '';

  return str.substr(0, 4) + '/' + str.substr(4, 2) + '/' + str.substr(6, 2);
}


export {
  px2spx,
  getUUID,
  formatNumber,
  formatTime
};