"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectCard = ({ project }: { project: Project }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <>
      {!loaded && (
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className="object-cover invisible"
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
    </>
  );
};

export default ProjectCard;
