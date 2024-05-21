
import { NextSeo } from 'next-seo';

const Blog = () => {

  const SEO = {
    title: "Blog",
    description: "EESTEC MK Blog",
    openGraph: {
      url: "https://eestec.mk/blog",
      type: "blog/website",
      locale: "mk_MK",
      site_name: "EESTEC MK Blog",
    }
  }

  return (
    <>
      <NextSeo {...SEO} />

      <div>header here plz</div>
    </>
  );
};

export default Blog;
