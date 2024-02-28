import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import EventsShowcase from "../components/events-showcase";
import BlogShowcase from "../components/blog-showcase";
import LandingPage from "../components/landing-page";
import UnauthenticatedLayout from "../components/layout/unauthenticated-layout";
import MakingMemories from "../components/making-memories";
import MeetTheBoard from "../components/meet-the-board";
import MissionVision from "../components/mission-vision";
import Partners from "../components/partners";
import Statistics from "../components/statistics";
import WhyYouShouldJoin from "../components/why-you-should-join";

import { NextSeo } from "next-seo";

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

      <LandingPage />
      <MissionVision />

      <Box mx="auto" width="80%">
        <Statistics />

        <WhyYouShouldJoin />

        <MakingMemories />

        <EventsShowcase />

        <BlogShowcase />

        <MeetTheBoard />

        <Partners />
      </Box>
      
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <UnauthenticatedLayout>{page}</UnauthenticatedLayout>;
};

export default Home;
