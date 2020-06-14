const cache = {}
const storage = window.localStorage ? window.localStorage : {
  setItem: function (key, value) {
    cache[key] = value
  },
  getItem: function (key) {
    return cache[key]
  },
}

export default storage
