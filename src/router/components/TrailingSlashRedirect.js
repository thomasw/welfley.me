// @flow
import React from 'react';
import { Redirect } from 'react-router';

type Props = {
  location: {
    pathname: string
  }
};

export default function TrailingSlashRedirect(props: Props) {
  const { location } = props;

  console.warn('Missing trailing slash in route; adding slash via redirect.');

  return <Redirect to={`${location.pathname}/`} />;
}
