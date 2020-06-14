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

export {
  px2spx,
  getUUID
};