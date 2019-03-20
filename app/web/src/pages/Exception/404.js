import React from 'react';
import intl from 'react-intl-universal';
import Link from 'umi/link';
import { string } from 'util_react_web';
import { Exception } from 'u_webant';

const { getIntl } = string;

const Exception404 = () => (
  <Exception
    type="404"
    linkElement={Link}
    backText={getIntl(intl, 'base.back.to.home', 'Back to home')}
  />
);

export default Exception404;
