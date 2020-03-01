import request from 'superagent'

export function getFlowers() {
  return request.get('/v1/flowers')
  .then(res => {
    return res.body
  })
}