import { logout, getSystemPath } from '@/services/base';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';
import { LS } from '@/utils';
import { login } from 'u_webant_base';

const model = login({
  logout, getSystemPath, setAuthority, reloadAuthorized, LS
});

export default model;
