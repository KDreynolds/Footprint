import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

function FaqSection(props) {
  const faqItemsCol1 = [
    {
      question: "What features are included?",
      answer:
        "Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti. Pellentesque non accumsan orci. Praesent at lacinia dolor.",
    },
    {
      question: "Can I use PayPal to pay you?",
      answer: "Pellentesque non accumsan orci. Praesent at lacinia dolor.",
    },
    {
      question: "Do I get access to the community?",
      answer:
        "Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti.",
    },
    {
      question: "Can I get a refund just in case?",
      answer:
        "Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti. Sed tincidunt scelerisque ligula, et facilisis nulla hendrerit non. Suspendisse potenti.",
    },
    {
      question: "Do you offer email support?",
      answer: "Etiam egestas fringilla enim, id convallis lectus laoreet at.",
    },
  ];

  const faqItemsCol2 = [
    {
      question: "Are the updates free for life?",
      answer:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.",
    },
    {
      question: "What features are included?",
      answer: "Etiam egestas fringilla enim, id convallis lectus laoreet at.",
    },
    {
      question: "Can I use PayPal to pay you?",
      answer: "Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Do I get access to the community?",
      answer:
        "Sed at mi velit. Ut egestas tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum. Donec vitae ultrices dolor.",
    },
    {
      question: "Can I get a refund just in case?",
      answer:
        "Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit. Ut egestas tempor est, in cursus enim venenatis eget! Nulla quis ligula ipsum. Donec vitae ultrices dolor.",
    },
    {
      question: "Do you offer email support?",
      answer: "Etiam egestas fringilla enim, id convallis lectus laoreet at.",
    },
  ];

  const faqItemsCol3 = [
    {
      question: "Are the updates free for life?",
      answer:
        "Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.",
    },
    {
      question: "Do I get access to the community?",
      answer: "Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Can I get a refund just in case?",
      answer:
        "Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
    },
    {
      question: "Do you offer email support?",
      answer: "Etiam egestas fringilla enim, id convallis lectus laoreet at.",
    },
    {
      question: "Are the updates free for life?",
      answer:
        "Gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.",
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
      <div className="space-y-16 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            {faqItemsCol1.map((item, index) => (
              <div className="bg-gray-100 rounded p-5" key={index}>
                <h4 className="font-semibold mb-2">{item.question}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {faqItemsCol2.map((item, index) => (
              <div className="bg-gray-100 rounded p-5" key={index}>
                <h4 className="font-semibold mb-2">{item.question}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {faqItemsCol3.map((item, index) => (
              <div className="bg-gray-100 rounded p-5" key={index}>
                <h4 className="font-semibold mb-2">{item.question}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {props.showSupportButton && (
          <div className="text-center">
            <Button
              href={props.supportUrl}
              target="_blank"
              size="lg"
              variant="simple"
              startIcon={
                <ArrowTopRightOnSquareIcon className="opacity-50 inline-block w-5 h-5" />
              }
            >
              Go to support center
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}

export default FaqSection;
