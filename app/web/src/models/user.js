import { queryCurrent } from '@/services/base';
import { reloadAuthorized } from '@/utils/Authorized';
import { LS } from '@/utils';
import { user } from 'u_webant_base';

const model = user({
  queryCurrent, reloadAuthorized, LS
});

export default model;
