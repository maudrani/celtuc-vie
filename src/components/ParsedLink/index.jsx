import Link from 'next/link';
import React from 'react';
import { GetAnchorTagDataOnPrismicLink } from 'src/utils/adapters/prismic';

const LinkWrapper = ({ linkObj, children, ...rest }) =>
  !linkObj?.url || !linkObj?.url?.url ? (
    children
  ) : (
    <Link {...GetAnchorTagDataOnPrismicLink(linkObj.url)} {...rest}>{children}</Link>
  );

export default LinkWrapper;
