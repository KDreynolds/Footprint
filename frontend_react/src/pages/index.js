import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import CtaSection from "./../components/CtaSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        title="Venue Management made easy"
        subtitle="Discover the ultimate platform for seamless venue operations and artist coordination."
        strapline="Efficiency at your fingertips"
        size="lg"
        bgColor="bg-emerald-100"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <FeaturesSection
        title="Powerful Tools for Venue Operators"
        subtitle="From booking to event execution, our dashboard puts control back in your hands."
        strapline="Innovative features for modern management"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      {/* <ClientsSection
        title="You're in good company"
        subtitle=""
        strapline="Lots of happy customers"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
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
      /> */}
      <CtaSection
        title={
          <>
            Create an account <span className="text-blue-600">today</span>!
          </>
        }
        subtitle="Experience the difference with our intuitive venue management platform. Sign up now and transform the way you manage your events."
        strapline="Your journey to simplified venue management begins here"
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
      <NewsletterSection
        title="Subscribe to our newsletter"
        subtitle="Join us and receive the best curated news, freebies and resources directly to your inbox every week!"
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
      />
    </>
  );
}

export default IndexPage;
