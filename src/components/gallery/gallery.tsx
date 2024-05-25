"use client";
import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import ProjectModal from "./projectModal";

const Gallery = ({ projects }: { projects: Project[] }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "div",
      {
        x: [-70, 0],
        opacity: [0, 0.01, 0.1, 0.15, 1],
        scale: [0.8, 1],
      },
      {
        duration: 0.7,
        delay: stagger(0.1, {
          from: "center",
        }),
      },
    );
  }, [scope]);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8"
      ref={scope}
    >
      {projects.map((project, i) => (
        <ProjectModal key={i} project={project}>
          <motion.div
            className={`cursor-pointer rounded-lg overflow-hidden relative before:opacity-0 before:absolute before:inset-0 before:-top-2.5 before:z-10 before:bg-primary-portfolio before:content-data-content before:text-2xl before:flex before:items-center before:justify-center min-h-[240px] hover:before:opacity-100 hover:before:translate-y-[10px] before:transition-all before:duration-500`}
            data-content={project.name}
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              className="object-cover"
            />
          </motion.div>
        </ProjectModal>
      ))}
    </motion.div>
  );
};

export default Gallery;
