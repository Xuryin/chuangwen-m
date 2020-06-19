import fetch from "@/env/fetch"
import storage from "@/utils/storage"

const request = fetch.request

// 设置统一的头部变量
fetch.defaults.headers.common['env'] = storage.getItem('BLOCK_CHAIN_ENV') || 'dev';
fetch.defaults.headers.common['token'] = 'a21f815169dbf2a65d71fd2b033cca18';

export function getData(params) {
  return request({
    url: '/indicator/10000000501',
    method: 'POST',
    data: {
      ...params,
    }
  })
}
