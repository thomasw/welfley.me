// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

export default function FourOhFour() {
  return (
    <React.Fragment>
      <Helmet>
        <title>404: Page not found</title>
        <meta name="description" content="This page could not be found." />
        <meta name="keywords" content="404, not found" />
      </Helmet>
      <section id="content">
        <h1>404: Not Found</h1>
      </section>
    </React.Fragment>
  );
}
