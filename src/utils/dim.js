/** dim 是 dimension 的缩写。意为： 一个自带维度信息的值, todo: 可扩展为三维及以上
 * Useage:
 *   dim({
 *     development: 'http://0.0.0.0/api',
 *     production: 'http://foo.com/api',
 *   }, NODE_ENV)
 */


class Dim {
  constructor(_hash, _dim) {
    this._values = _hash
    this._dim = _dim
  }

  get(dim) {
    const _dim = dim || this._dim
    return this._values[_dim] !== undefined ? this._values[_dim] : undefined
  }
}

/**
 * 定义一个dim对象
 * @param dim 当前的维度值
 * @param hash 所有的枚举值
 * @returns {Dim}
 */
const dim = (hash, ...args) => {
  return new Dim(hash, ...args)
}

module.exports = dim
