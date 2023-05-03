import NavbarFullMenu from '@/components/Navbar-full-menu/navbar.full-menu';
import SimpleFooter from '@/components/SimpleFooter';
import { AppDataContext } from '@/contexts/appdata';
import * as prismicH from '@prismicio/helpers';
import { SliceZone } from '@prismicio/react';
import { createClient, linkResolver } from 'prismicio';
import { useContext, useEffect } from 'react';
import { components } from 'slices';

const Page = ({ page, navigation, brandData }) => {
  const { getBrandData, getNavigationData } = useContext(AppDataContext);

  useEffect(() => {
    getBrandData(brandData);
    getNavigationData(navigation);
  }, []);

  return (
    <>
      <NavbarFullMenu />
      <SliceZone slices={page.data.slices} components={components} />
      <SimpleFooter />
    </>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID('page', params.uid);

  const brandInfoRes = await client.getSingle('brand_info');
  const nagivationRes = await client.getSingle('navbar');

  const { data: brandInfoData } = brandInfoRes || {};
  const { data: nagivationData } = nagivationRes || {};

  return {
    props: {
      page,
      brandData: brandInfoData,
      navigation: nagivationData,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType('page');

  return {
    paths: pages.map(page => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}
