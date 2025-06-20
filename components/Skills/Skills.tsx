import React from "react";
import skills from "@/data/skills.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Skill from "./Skill";
import Image from "next/image";

const Skills = () => {
  return (
    <SectionContainer id={"skills"}>
      <div className="section-contents mx-[22px] md:mx-[116px]">
        <SectionHeader
          plainText={"💻 This is my"}
          highlightText={"Tech Stack"}
        />
        <div className="card w-full px-[33px] py-[27px] flex flex-wrap flex-col md:flex-row justify-center items-center gap-[19px] md:gap-[33px]">
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <>
        <Image
          src={"/tech_stack_grid_dark.svg"}
          alt={"background grid decoration dark"}
          width={569}
          height={373}
          className="absolute hidden dark:md:block -z-10 -left-[135px] -top-[39px]"
        />
        <Image
          src={"/tech_stack_grid.svg"}
          alt={"background grid decoration light"}
          width={569}
          height={373}
          className="absolute hidden dark:hidden md:block -z-10 -left-[125px] -top-[39px]"
        />
      </>
    </SectionContainer>
  );
};

export default Skills;
