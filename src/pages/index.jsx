import NavbarFullMenu from '@/components/Navbar-full-menu/navbar.full-menu';
import ShowcasesFullScreen from '@/components/Showcases-full-screen/showcases-full-screen';
import { AppDataContext } from '@/contexts/appdata';
import { StylesContext } from '@/contexts/styles';
import { createClient } from 'prismicio';
import { useContext, useEffect } from 'react';

const Intro = ({ page, brandData, navigation }) => {
  const { changeTheme } = useContext(StylesContext);
  const { getBrandData } = useContext(AppDataContext);

  if (!page?.slides) return;

  useEffect(() => {
    changeTheme('dark');
    getBrandData(brandData);
    console.log(navigation)
  }, []);

  return (
    <>
      <NavbarFullMenu />
      <ShowcasesFullScreen slides={page.slides} />
    </>
  );
};

export default Intro;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const introRes = await client.getSingle('intro');
  const brandInfoRes = await client.getSingle('brand_info');
  const nagivationRes = await client.getSingle('navbar');

  const { data: introData } = introRes || {};
  const { data: brandInfoData } = brandInfoRes || {};
  const { data: nagivationData } = nagivationRes || {};

  return {
    props: {
      page: introData,
      brandData: brandInfoData,
      navigation: nagivationData,
    },
  };
}
