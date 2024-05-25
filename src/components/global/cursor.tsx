"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { motion, useMotionValue, useWillChange } from "framer-motion";

const Cursor = () => {
  const willChange = useWillChange();

  const cursorXPosition = useMotionValue(-100);

  const cursorYPosition = useMotionValue(-100);

  const isMobile = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    !isMobile &&
      window.addEventListener("mousemove", (e) => {
        cursorXPosition.set(e.pageX);
        cursorYPosition.set(e.pageY - window.scrollY);
      });
    window.addEventListener("wheel", (e) => {
      cursorXPosition.set(e.pageX);
      cursorYPosition.set(e.pageY - window.scrollY);
    });
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className={cn(
          `bg-primary-portfolio rounded-full w-2 h-2 fixed z-[1000000000000] pointer-events-none`,
        )}
        style={{
          top: cursorYPosition,
          left: cursorXPosition,
          y: "-50%",
          x: "-50%",
          willChange,
        }}
      ></motion.div>
      <motion.div
        className={cn(
          "bg-primary-portfolio opacity-30 fixed w-12 h-12 rounded-full z-[1000000000000] pointer-events-none",
        )}
        translate="yes"
        style={{
          top: cursorYPosition,
          left: cursorXPosition,
          transition: "all 130ms",
          y: "-50%",
          x: "-50%",
          willChange,
        }}
      ></motion.div>
    </>
  );
};

export default Cursor;
