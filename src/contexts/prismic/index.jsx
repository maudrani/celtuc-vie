import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from 'prismicio';

export default function Prismic({ children }) {
  return (
    <PrismicProvider internalLinkComponent={props => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        {children}
      </PrismicPreview>
    </PrismicProvider>
  );
}
