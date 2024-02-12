import React from "react";
import Meta from "components/Meta";
import HeroSection2 from "components/HeroSection2";
import FeaturesSection from "components/FeaturesSection";
import ClientsSection from "components/ClientsSection";
import TestimonialsSection from "components/TestimonialsSection";
import CtaSection from "components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection2
        title="Bridging the gap between Venues and Artists"
        subtitle="An intuitve, easy to use platform for Venues to post location specifics."
        strapline=""
        size="lg"
        bgColor="bg-emerald-200"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
      />
      <FeaturesSection
        title="Amazing features packed in a neat package"
        subtitle="You will love working with your newly updated and customized dashboard."
        strapline="No more scrambling to make a packet"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <ClientsSection
        title="These companies trust us"
        subtitle=""
        strapline=""
        size="md"
        bgColor="bg-green-400"
        bgImage=""
        bgImageOpacity={1}
        textColor="text-white"
      />
      <TestimonialsSection
        title="Customer Testimonials"
        subtitle=""
        strapline="Real Feedback"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <CtaSection
        title={
          <>
            Create an account <span className="text-green-600">today</span>!
          </>
        }
        subtitle="Inspiring results from day one without the pain. Leave the work to us."
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

export default IndexPage;
