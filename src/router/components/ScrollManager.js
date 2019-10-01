// @flow
import { useEffect } from 'react';
import { withRouter } from 'react-router';

type Props = {
  location: { pathname: string }
};

let MOUNTED = false;

function ScrollManager({ location: { pathname } }: Props) {
  useEffect(() => {
    // Disregard the first pathname change. That's the initial url and
    // we want to honor whatever #hash is specified by not scrolling up to the
    // top.
    if (!MOUNTED) {
      MOUNTED = true;
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default withRouter(ScrollManager);
