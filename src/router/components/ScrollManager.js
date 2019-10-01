// @flow
import React from 'react';
import { withRouter } from 'react-router';

type Props = {
  location: { pathname: string }
};

function ScrollManager({ location: { pathname } }: Props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default withRouter(ScrollManager);
