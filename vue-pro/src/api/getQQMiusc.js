import request from '@/utils/request'

export function musichAll(params) {
  return request({
    url: '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    method: 'get',
    params
  })
}
export function topList(params) {
  return request({
    url: '/api/v8/fcg-bin/fcg_myqq_toplist.fcg',
    method: 'get',
    params
  })
}
export function gethotkey(params) {
  return request({
    url: '/api/splcloud/fcgi-bin/gethotkey.fcg',
    method: 'get',
    params
  })
}
export function searchforKeyp(params) {
  return request({
    url: '/api/soso/fcgi-bin/search_for_qq_cp',
    method: 'get',
    params
  })
}

