import request from '../utils/request.js'
export default function getArticle () {
  return request({
    url: 'article',
    method: 'get'
  })
}
