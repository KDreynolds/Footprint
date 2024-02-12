import React from "react";
import { CubeTransparentIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

function HeroSection2(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="absolute inset-x-0 bottom-0 text-blue-700 text-opacity-50">
        <svg fill="currentColor" viewBox="0 0 500 150">
          <path d="M-0.84,34.03 C187.63,148.52 327.03,-4.44 499.72,40.95 L500.00,150.00 L0.00,150.00 Z" />
        </svg>
      </div>
      <div className="relative container">
        <div className="text-center">
        <Link href="/">
          <a className="inline-block mb-10 text-blue-600 hover:text-blue-400">
            <img
              src="/footprint-favicon-black.png" // Make sure the path is correct
              alt="Footprint Logo"
              className="inline-block w-20 h-20" // Adjust the size as needed
            />
          </a>
        </Link>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
          <Link href="/pricing" passHref={true}>
            <Button
              size="xl"
              variant="secondary"
              endIcon={
                <ArrowRightIcon className="opacity-70 inline-block w-5 h-5" />
              }
            >
              Get Started
            </Button>
          </Link>
          <Link href="/about" passHref={true}>
            <Button size="xl" variant="primary">
              Learn more
            </Button>
          </Link>
        </div>
        <div className="pb-4 md:pb-0">
          <div className="relative mx-5 lg:mx-32">
            <div className="absolute inset-0 rounded-xl bg-blue-600 bg-opacity-20 -m-4 transform rotate-2" />
            <div className="absolute inset-0 rounded-xl bg-blue-600 bg-opacity-25 -m-4 transform -rotate-2" />
            <img
              className="relative rounded-lg mx-auto shadow-lg"
              src="/pexels-teddy-yang-2263410.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection2;
