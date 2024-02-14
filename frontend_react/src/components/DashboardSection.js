import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import DashboardItems from "./DashboardItems";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";
import { useDropzone } from 'react-dropzone';




function DashboardSection(props) {
  const auth = useAuth();

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: acceptedFiles => {
      // Handle file upload here
      console.log(acceptedFiles);
    }
  });

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
        <div className="flex flex-wrap">
          <div className="p-4 w-full md:w-1/2">
            <div className="rounded border border-gray-200">
              <DashboardItems />
            </div>
          </div>
          <div className="p-4 w-full md:w-1/2">
            <div className="p-6 rounded border border-gray-200 prose prose-a:text-blue-600 max-w-none">
            <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
            </div>
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
}

export default DashboardSection;
