import request from '@/utils/request';

export function getLoginInfo(data) {
  return request({
    url: '/User/getLoginInfo',
    method: 'post',
    data
  });
}
