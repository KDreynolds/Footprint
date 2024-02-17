import React from "react";
import {
  AdjustmentsVerticalIcon,
  ChartPieIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import FeatureIcon2 from "./FeatureIcon2";

function FeaturesSection(props) {
  const features = [
    {
      title: "Fully Customizable",
      description:
        "Tailor the platform to fit the unique needs of your venue. From seating arrangements to ticketing options, control every aspect with ease.",
      icon: AdjustmentsVerticalIcon,
      iconColor: "orange",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with comprehensive analytics. Understand your audience, track sales trends, and optimize your events for success.",
      icon: ChartPieIcon,
      iconColor: "red",
    },
    {
      title: "Global Reach",
      description:
        "Expand your presence and attract a worldwide audience. Our platform supports multiple languages and currencies, enabling you to host international events.",
      icon: GlobeAmericasIcon,
      iconColor: "emerald",
    },
    // {
    //   title: "Lightning-Fast Interface",
    //   description:
    //     "Enjoy a responsive, intuitive UI that ensures quick and efficient management of your events. Time is money, and our platform helps you save both.",
    //   icon: BoltIcon,
    //   iconColor: "purple",
    // },
    // {
    //   title: "Modular Components",
    //   description:
    //     "Our platform is built with flexibility in mind. Choose the modules you need, from ticketing to vendor management, to create a solution that fits your workflow.",
    //   icon: PuzzlePieceIcon,
    //   iconColor: "blue",
    // },
    // {
    //   title: "Seamless Authentication",
    //   description:
    //     "Keep your data secure with robust authentication mechanisms for staff and customers alike. Manage permissions with custom roles and access controls.",
    //   icon: UsersIcon,
    //   iconColor: "pink",
    // },
  ];

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="space-y-16 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <div
              className="group p-5 transition ease-out duration-200 rounded-2xl text-center"
              key={index}
            >
              <FeatureIcon2
                color={feature.iconColor}
                size="large"
                className="mb-12"
              >
                <feature.icon />
              </FeatureIcon2>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;