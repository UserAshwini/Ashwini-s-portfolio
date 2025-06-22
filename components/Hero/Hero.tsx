import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React from "react";
import Reveal from "../Reveal";

const Hero = () => {
  return (
    <section className="relative -top-10 flex flex-col md:flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      {/* Mobile Spline */}
      <div className="relative  mb-[50px] mt-[-160px] h-[360px] w-[360px] sm:w-[400px] md:hidden">
        <Spline
          scene="https://prod.spline.design/ARtt44jeBmEi47Us/scene.splinecode"
          className="absolute inset-0"
        />
      </div>
      <div className=" flex flex-col  gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
        <Reveal initialX={-25}>
          <h1 className=" text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline">
            <span className="-ml-3">👋🏻 </span> Hello I`m Ashwini Upadhyay, I`m a{" "}
            <span className="block text-[27px] highlight  mt-2 md:text-[45px] md:inline md:mt-0">
              Blockchain Developer
            </span>
          </h1>
        </Reveal>
        <Reveal initialX={-30} delay={0.2}>
          <p className="text-center text-md mx-6 md:text-[22px] md:text-start md:mx-0">
            DApp Developer building smart contracts and Web3 user interfaces.
          </p>
        </Reveal>
        <Reveal initialX={-40} delay={0.4}>
          <a
            href="mailto:ashwiniblockchaindev@gmail.com"
            className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6"
          >
            Let`s Connect
            <Image
              src={"/arrow_right_icon.svg"}
              alt={"arrow right"}
              width={20}
              height={20}
            />
          </a>
        </Reveal>
      </div>
      <div className="relative -top-10 left-10 hidden lg:block h-[400px] w-[500px] lg:h-[500px] lg:w-[760px] rounded-xl">
        <Spline
          scene="https://prod.spline.design/ARtt44jeBmEi47Us/scene.splinecode"
          className="absolute inset-0"
        />
      </div>
    </section>
  );
};

export default Hero;
