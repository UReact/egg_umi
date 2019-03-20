import { request, config } from '@/utils';

export async function uploadToken() {
  const path = '/upload/token';
  return request(`${config.APIV1}${path}`);
}

// TODO
export async function queryNotices() {
  return request('/api/notices');
}
