import React from "react";
import Link from "next/link";
import Section from "components/Section";
import LegalTerms from "components/LegalTerms";
import LegalPrivacy from "components/LegalPrivacy";

function LegalSection(props) {
  const validSections = {
    "terms-of-service": true,
    "privacy-policy": true,
  };

  const section = validSections[props.section]
    ? props.section
    : "terms-of-service";

  const data = {
    domain: "company.com",
    companyName: "Company",
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
        <nav className="flex items-center border-b border-gray-200 max-w-sm mx-auto mb-12">
          {[
            { section: "terms-of-service", label: "Terms of Service" },
            { section: "privacy-policy", label: "Privacy Policy" },
          ].map((tab) => (
            <Link href={`/legal/${tab.section}`} key={tab.section}>
              <a
                className={
                  "flex items-center grow justify-center px-3 md:px-4 -mb-px py-4 border-b-2" +
                  (tab.section === section
                    ? " text-blue-500 border-blue-500"
                    : "") +
                  (tab.section !== section
                    ? " border-transparent hover:text-blue-500"
                    : "")
                }
              >
                {tab.label}
              </a>
            </Link>
          ))}
        </nav>

        {section === "terms-of-service" && <LegalTerms {...data} />}

        {section === "privacy-policy" && <LegalPrivacy {...data} />}
      </div>
    </Section>
  );
}

export default LegalSection;
