// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Header from 'theme/components/Header';
import Footer from 'theme/components/Footer';

export default function FourOhFour() {
  return (
    <React.Fragment>
      <Helmet>
        <title>404: Page not found</title>
        <meta name="description" content="This page could not be found." />
        <meta name="keywords" content="404, not found" />
      </Helmet>
      <Header>
        <h1>404: Not Found</h1>
        <p>How’d we end up in a place like this?</p>
        <p>
          C’mon, let’s head <Link to="/">home</Link>.
        </p>
      </Header>
      <Footer sticky />
    </React.Fragment>
  );
}
