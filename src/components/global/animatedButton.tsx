"use client";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, useWillChange } from "framer-motion";
import { motion } from "framer-motion";

interface Props extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = ({ children, className, ...props }: Props) => {
  const willChange = useWillChange();

  return (
    <motion.button
      style={{ willChange }}
      className={cn(
        "cursor-pointer rounded-full w-fit pl-6 flex gap-8 items-center border border-primary-portfolio relative before:absolute before:inset-0 before:bg-primary-portfolio before:left-full hover:before:left-0 before:transition-all before:duration-500 before:z-[-1] z-10 overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
