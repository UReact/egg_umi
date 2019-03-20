import React from 'react';
import { Authorized, Exception } from 'u_webant';
import { getAuthority } from '@/utils/authority';
import Redirect from 'umi/redirect';
import { stringify } from 'qs';
import intl from 'react-intl-universal';
import { string } from 'util_react_web';

const { getIntl } = string;

const Authority = getAuthority();
const AuthorizedDiv = Authorized(Authority);

const loginUrl = 'http://login.hiredchina.com';

const noMatchToLogin = <Exception
  type="403"
  linkElement='a'
  title={getIntl(intl, 'base.login.first.title', 'Not logged')}
  desc={getIntl(intl, 'base.login.first.desc', 'Sorry, you have to login first')}
  redirect={`${loginUrl}/user/login?${stringify({ redirect: encodeURIComponent(window.location.href) })}`}
  backText={getIntl(intl, 'base.login.now', 'Login now')}
/>;

const getUrl = () =>
  `/Exception/403?${stringify({ redirect: encodeURIComponent(window.location.href) })}`;

const noMatch = (
  <AuthorizedDiv authority='logined' noMatch={noMatchToLogin}>
    <Redirect to={getUrl()} />
  </AuthorizedDiv>
);

export default ({ children }) => (
  <AuthorizedDiv authority={children.props.route.authority} noMatch={noMatch}>
    {children}
  </AuthorizedDiv>
);
