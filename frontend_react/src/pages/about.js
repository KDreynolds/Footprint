import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import CtaSection from "./../components/CtaSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Discover more about our venue management platform and the team behind it" />
      <HeroSection2
        title={
          <>
            Welcome to <span className="font-light">Footprint</span>
          </>
        }
        subtitle="A dedicated team committed to simplifying your venue management needs with innovative solutions."
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        leftImage="/pexels-venue.jpg"
        rightImage="/pexels-event.jpg"
      />
      <StatsSection
        title="Empowering Venue Managers Worldwide"
        subtitle="Thousands of venue managers globally trust our platform to streamline their operations and enhance guest experiences."
        strapline="Transforming Spaces into Experiences"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <TeamBiosSection
        title="Our Expert Team"
        subtitle="Driven by a passion for excellence in venue management, our team works tirelessly to support your success."
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <CtaSection
        title={
          <>
            Create an account <span className="text-blue-600">today</span>!
          </>
        }
        subtitle="Inspiring results from day one without the pain. Get your own custom dashboard and start building amazing services."
        strapline=""
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default AboutPage;
