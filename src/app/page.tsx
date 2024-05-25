import AnimatedButton from "@/components/global/animatedButton";
import ProfileImage from "@/components/home/profileImage";
import { RxArrowRight } from "react-icons/rx";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 items-center justify-center sm:justify-start min-h-screen">
      <ProfileImage />
      <div className="grid gap-6 w-full items-center sm:items-start">
        <h1 className="text-[2rem] text-center sm:text-start sm:text-[3.4rem] max-w-[613px] font-bold leading-tight sm:ml-24 relative w-full sm:before:w-11 sm:before:h-1 sm:before:bg-primary-portfolio sm:before:rounded-full sm:before:absolute sm:before:-left-24 sm:before:top-[13%]">
          <span className="text-primary-portfolio">I&apos;M MAHMOUD HELAL</span>
          <span className="block whitespace-nowrap">FRONTEND DEVELOPER</span>
        </h1>
        <p className="max-w-[80vw] sm:max-w-[750px] mx-auto sm:mx-0 leading-normal text-[17px] text-center sm:text-start">
          I am a Computer Science enthusiast. I am passionate about Web
          developing, and problem-solving. I am a self-taught programmer and I
          am always looking to improve my skills.
        </p>
        <Link href={"/about"} className="flex justify-center sm:justify-start">
          <AnimatedButton>
            <p className="font-semibold text-[13px]">MORE ABOUT ME</p>
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary-portfolio flex items-center justify-center">
              <RxArrowRight
                style={{
                  scale: 1.5,
                }}
              />
            </div>
          </AnimatedButton>
        </Link>
      </div>
    </div>
  );
}
