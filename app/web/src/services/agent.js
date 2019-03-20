import { request, config } from '@/utils';

export async function getSupports({ typeName }) {
  const where = JSON.stringify({ typeName });
  return request(`${config.APIV1}/support?isPaging=true&where=${where}`);
}
