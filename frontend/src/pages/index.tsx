import { NextSeo } from "next-seo";
import { ReactElement } from "react";

const Home = () => {

  const SEO = {
    title: "Home",
    description: "EESTEC MK Home",
    openGraph: {
      url: "https://eestec.mk/",
      type: "homepage/website",
      // images: {
      //  url: "https://eestec.mk/eestec.ico",
      //  width: 800,
      //  height: 600,
      //  alt: "EESTEC MK Banner",
      // },
      locale: "mk_MK",
      site_name: "EESTEC MK Home",
    }
  }

  return (
    <>
      <NextSeo {...SEO} />

      <div>hello</div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default Home;
