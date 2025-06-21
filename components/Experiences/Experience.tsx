import Image from "next/image";
import React from "react";
import Reveal from "../Reveal";

type Props = {
  id: number;
  image: string;
  company: string;
  role: string;
  description: string;
  date: string;
};

const Experience = ({ id, image, company, role, description, date }: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={0.5 * id}>
      <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3">
        <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:items-center">
            <Image
              src={image}
              alt={`Image ${company}`}
              width={20}
              height={20}
            />
            <h3 className="text-xl font-bold">{company}</h3>
          </div>
          <p className="text-base md:text-xl font-medium">{role}</p>
        </div>
        <p className="text-sm md:text-base ">{description}</p>
        <p className="text-sm/l md:text-base ">{date}</p>
      </div>
    </Reveal>
  );
};

export default Experience;
