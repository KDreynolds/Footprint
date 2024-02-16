import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import TableFiles from "./TableFiles"; // Import TableFiles component

function DashboardSection(props) {
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
        {/* Use TableFiles component to display files */}
        <TableFiles />
      </div>
    </Section>
  );
}

export default DashboardSection;