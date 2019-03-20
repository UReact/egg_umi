import { Authorized } from 'u_webant';
import { getAuthority } from './authority';

let AuthorizedDiv = Authorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  AuthorizedDiv = Authorized(getAuthority());
};

export { reloadAuthorized };
export default AuthorizedDiv;
