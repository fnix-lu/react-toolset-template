import request from '@/utils/request'

export function getTodoList () {
  return request({
    url: '/todo/list',
    method: 'get'
  })
}
