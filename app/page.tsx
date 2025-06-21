import TopBackground from "@/components/Hero/TopBackground";
import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-clip " id="home">
      {/* <div className="w-screen h-screen"></div> */}
      <Sections />
      <Navbar />
      <ThemeToggle />
      <TopBackground />
      <Image
        src={"/bottom_gradient_mobile.svg"}
        alt={"bottomGradientMobile"}
        width={1024}
        height={700}
        className="absolute bottom-0 min-w-[1024px] min-h-[700px] -z-50 md:hidden"
      />
      <Image
        src={"/bottom_gradient.svg"}
        alt={"bottomGradientMobile"}
        width={1557}
        height={936}
        className="absolute -bottom-[175px] left-1/2 -translate-x-1/2 min-w-[1557px] min-h-[936px] -z-50 md:block hidden"
      />
    </div>
  );
}
