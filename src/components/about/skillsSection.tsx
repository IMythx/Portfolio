"use client";

import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { MdJavascript } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTurborepo } from "react-icons/si";
import RtlSvg from "../../../public/octopus.svg";
import ZustandSvg from "../../../public/zustand.svg";
import FormikSvg from "../../../public/formik.svg";
import Image from "next/image";
import { useAnimate, motion, stagger } from "framer-motion";
import { useEffect } from "react";

const svgsStyles = {
  color: "#001",
  size: "2.7rem",
};

const skillsSvgs = [
  {
    svg: <MdHtml {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <MdCss {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <MdJavascript {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <FaReact {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <RiNextjsLine {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <RiTailwindCssFill {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <TbBrandTypescript {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiJest {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiVitest {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiCypress {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <BsFiletypeScss {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiRedux {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiVite {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiMui {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <TbBrandFramerMotion {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiTurborepo {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: RtlSvg,
    type: "SVG",
  },
  {
    svg: ZustandSvg,
    type: "SVG",
  },
  {
    svg: <SiShadcnui {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiZod {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiAxios {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiReactquery {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: <SiReactrouter {...svgsStyles} />,
    type: "RFC",
  },
  {
    svg: FormikSvg,
    type: "SVG",
  },
  {
    svg: <SiReacthookform {...svgsStyles} />,
    type: "RFC",
  },
];
const SkillsSection = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "div",
      {
        x: [-150, 0],
        opacity: [0, 0.01, 0.1, 0.15, 1],
        scale: [0, 0.7, 1],
      },
      {
        delay: stagger(0.08, { from: "center" }),
        // delay: (custom) => -(custom % 5) / 20 + custom / 100,
        duration: 0.7,
      },
    );
  });

  return (
    <div className="grid gap-10 sm:gap-16 mt-16 sm:mt-24">
      <p className="text-2xl font-bold sm:text-center">MY SKILLS</p>
      <motion.div
        ref={scope}
        className="grid grid-cols-3 sm:grid-cols-5 gap-y-10 justify-items-center"
      >
        {skillsSvgs.map(({ type, svg }, index) => (
          <motion.div
            key={index}
            className="bg-primary-portfolio w-20 h-20 rounded-full flex items-center justify-center select-none"
            custom={index}
          >
            {type === "RFC" ? (
              svg
            ) : (
              <Image
                src={svg}
                alt="svg"
                width={index < 17 ? 55 : 100}
                height={index < 17 ? 55 : 100}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
