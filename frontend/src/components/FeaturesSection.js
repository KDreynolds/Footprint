import React from "react";
import {
  AdjustmentsVerticalIcon,
  ChartPieIcon,
  GlobeAmericasIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import FeatureIcon2 from "components/FeatureIcon2";

function FeaturesSection(props) {
  const features = {
    // Left column
    left: [
      {
        title: "Customizable",
        description:
          "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
        icon: AdjustmentsVerticalIcon,
        iconColor: "orange",
      },
      {
        title: "Rich Statistics",
        description:
          "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
        icon: ChartPieIcon,
        iconColor: "red",
      },
    ],
    // Right column
    right: [
      {
        title: "Works globally",
        description:
          "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
        icon: GlobeAmericasIcon,
        iconColor: "emerald",
      },
      {
        title: "Lighting fast UI",
        description:
          "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque. Proin rhoncus dui at ligula vestibulum ut facilisis.",
        icon: BoltIcon,
        iconColor: "purple",
      },
    ],
  };

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">
          <div className="lg:w-5/12 xl:w-5/12 md:py-12 space-y-10">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              strapline={props.strapline}
            />
          </div>
          <div className="lg:w-7/12 xl:w-7/12 flex-none relative">
            <div className="pattern-dots opacity-10 absolute top-0 left-0 w-48 h-64 md:mt-20 transform -translate-x-10 -translate-y-10" />
            <div className="pattern-dots opacity-10 absolute bottom-0 right-0 w-48 h-64 md:mb-20 transform translate-x-10 translate-y-10" />
            <div className="relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className="md:w-1/2 md:mt-24 space-y-6">
                {features.left.map((feature, index) => (
                  <div
                    className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300"
                    key={index}
                  >
                    <FeatureIcon2 color={feature.iconColor} className="mb-6">
                      <feature.icon />
                    </FeatureIcon2>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="md:w-1/2 space-y-6">
                {features.right.map((feature, index) => (
                  <div
                    className="group bg-white p-5 transition ease-out duration-200 border-2 border-gray-200 rounded-2xl hover:border-gray-300"
                    key={index}
                  >
                    <FeatureIcon2 color={feature.iconColor} className="mb-6">
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
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
