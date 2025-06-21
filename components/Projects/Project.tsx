"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import Reveal from "../Reveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  thumbnail:
    | {
        light: string;
        dark: string;
      }
    | string;
  title: string;
  link: {
    url: string;
    label: string;
  };
  description: string;
  languageIcons: string[];
};

const Project = ({
  thumbnail,
  title,
  link,
  description,
  languageIcons,
}: Props) => {
  const getThumbnailSrc = () => {
    if (typeof thumbnail === "string") {
      return thumbnail;
    }
    return thumbnail.light;
  };

  const getThumbnailSrcDark = () => {
    if (typeof thumbnail === "string") {
      return thumbnail;
    }
    return thumbnail.dark;
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const xRotation = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const yRotation = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!e.currentTarget) return;

    const target = e.currentTarget as HTMLElement;
    const clientRect = target.getBoundingClientRect();

    const xPos = (e.clientX - clientRect.left) / clientRect.width - 0.5;
    const yPos = (e.clientY - clientRect.top) / clientRect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseMoveLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal initialX={-50} delay={0.5}>
      <motion.div
        className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px] "
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseMoveLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: xRotation,
          rotateY: yRotation,
        }}
      >
        <Image
          src={getThumbnailSrc()}
          alt={`Thumbnail for ${title}`}
          width={392}
          height={230}
          className="w-full h-[230px] object-contain block dark:hidden"
          style={{ transform: "translateZ(100px)" }}
        />

        <Image
          src={getThumbnailSrcDark()}
          alt={`Thumbnail for ${title}`}
          width={392}
          height={230}
          className="w-full h-[230px] object-contain hidden dark:block"
          style={{ transform: "translateZ(100px)" }}
        />
        <div className="flex flex-col gap-[11px]">
          <div className=" flex justify-between  items-center">
            <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
            <a
              href={link.url}
              className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px]"
            >
              <span className="hidden  md:block ">{link.label}</span>
              <img
                src="link_arrow.svg"
                alt="link arrow"
                className="block dark:hidden "
              />
              <img
                src="link_arrow_dark.svg"
                alt="link arrow"
                className="hidden dark:block "
              />
            </a>
          </div>
          <p className="line-clamp-2 text-sm md:text-base">{description}</p>
          <div className="flex flex-row gap-[11px]">
            {" "}
            {languageIcons.map((icon, iconId) => (
              <Image
                src={icon}
                alt="languageIcon"
                key={iconId}
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
};

export default Project;
