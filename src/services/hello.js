import fetch from "@/env/fetch"

const request = fetch.request

export function getIndicator(data) {
  return request({
    url: '/api/v2/indicator/:indicatorCode',
    method: 'POST',
    restful: true,
    data,
  })
}
