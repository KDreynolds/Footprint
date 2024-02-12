import React from "react";
import {
  CubeIcon,
  CodeBracketIcon,
  CursorArrowRaysIcon,
  VariableIcon,
  TruckIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function ClientsSection(props) {
  const clients = [
    {
      name: "boxspot",
      logo: CubeIcon,
    },
    {
      name: "TechCode",
      logo: CodeBracketIcon,
    },
    {
      name: "cCLICK",
      logo: CursorArrowRaysIcon,
    },
    {
      name: "sBoard",
      logo: VariableIcon,
    },
    {
      name: "uptruck",
      logo: TruckIcon,
    },
    {
      name: "freshloc",
      logo: MapPinIcon,
    },
  ];

  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center text-white-200">
          {clients.map((client, index) => (
            <div
              className="h-28 flex items-center justify-center relative"
              key={index}
            >
              <div className="absolute inset-0 transform skew-x-6 bg-black bg-opacity-10" />
              <div className="relative inline-flex items-center space-x-2 text-2xl font-semibold">
                <client.logo className="inline-block w-10 h-10" />
                <span>{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ClientsSection;
