import fetch from "@/env/fetch"

const request = fetch.request

export function getAuth(data) {
  return request({
    url: '/data/cockpit/getCockpitToken',
    method: 'POST',
    data,
  })
}
