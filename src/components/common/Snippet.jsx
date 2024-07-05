import React from 'react';
import { Helmet } from 'react-helmet';

const Snippet = ({ pageName }) => {
  return (
    <Helmet>
      <title>{`Penumbra | ${pageName}`}</title>
    </Helmet>
  );
};

export default Snippet;