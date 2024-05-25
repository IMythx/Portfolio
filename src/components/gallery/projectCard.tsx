"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectCard = ({ project }: { project: Project }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <motion.div
      className={`cursor-pointer rounded-lg overflow-hidden relative before:opacity-0 before:absolute before:inset-0 before:-top-2.5 before:z-10 before:bg-primary-portfolio before:content-data-content before:text-2xl before:flex before:items-center before:justify-center min-h-[240px] hover:before:opacity-100 hover:before:translate-y-[10px] before:transition-all before:duration-500`}
      data-content={project.name}
    >
      {!loaded && (
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className="object-cover opacity-0"
        />
      )}
      {!loaded && <Skeleton className="w-full h-[240px] bg-background" />}
      {loaded && (
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;
