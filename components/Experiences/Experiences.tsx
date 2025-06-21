import React from "react";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import experience from "@/data/experience.json";
import Experience from "./Experience";
import Image from "next/image";

const Experiences = () => {
  return (
    <SectionContainer id={"experience"}>
      <div className="section-contents mb-[66px] md:mb-[43px] md:mx-[64px]">
        <SectionHeader
          plainText={"🧳 My prior "}
          highlightText={"Work Experience"}
        />
        <div className="w-full px-6 md:px-[52px] flex flex-col gap-5">
          {experience.map((experience, id) => (
            <Experience
              key={id}
              id={id}
              image={experience.image}
              company={experience.company}
              role={experience.role}
              description={experience.description}
              date={experience.date}
            />
          ))}
        </div>
      </div>
      <div className="circle-icon h-14 w-14 top-[77px] right-1.5 md:top-[153px] md:right-[70px] -z-10">
        <Image
          src={"/bracket_icon.svg"}
          alt="bracketIcon"
          width={23}
          height={23}
        />
      </div>
      <div className="circle-icon h-14 w-14 bottom-0 left-1.5 md:left-[90px]   -z-10">
        <Image
          src={"/electricity_icon.svg"}
          alt="electricityIcon"
          width={23}
          height={23}
        />
      </div>
    </SectionContainer>
  );
};

export default Experiences;
