import React from 'react';

import IndexPage from './components/IndexPage';

export default (ctx) => {
  const { location: { query }} = ctx;
  delete query.ref;
  return (
    <IndexPage {...query} />
  );
};