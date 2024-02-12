import React from "react";
import Section from "components/Section";
import LoadingIcon from "components/LoadingIcon";

function PageLoader(props) {
  return (
    <Section size="lg">
      {!props.children && <LoadingIcon className="mx-auto w-7" />}

      {props.children && <>{props.children}</>}
    </Section>
  );
}

export default PageLoader;
