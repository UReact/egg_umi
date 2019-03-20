import { request, config } from '@/utils';
import { stringify } from 'qs';

export function fetch({ page = 1, where }) {
  return request(`${config.APIV1}/profiles?${stringify({ page, ...where })}`);
}
