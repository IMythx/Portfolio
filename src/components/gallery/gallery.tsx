"use client";
import { useAnimate, stagger, motion } from "framer-motion";
import { useEffect } from "react";
import ProjectModal from "./projectModal";
import ProjectCard from "./projectCard";

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
          <ProjectCard project={project} />
        </ProjectModal>
      ))}
    </motion.div>
  );
};

export default Gallery;
