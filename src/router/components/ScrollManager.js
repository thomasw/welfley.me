// @flow
import * as React from 'react';
import { withRouter } from 'react-router';

type Props = {
  children: React.Node,
  location: { pathname: string }
};

function ScrollManager({ children, location: { pathname } }: Props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
}

export default withRouter(ScrollManager);
