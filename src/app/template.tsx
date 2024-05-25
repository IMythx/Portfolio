"use client";
import { cn } from "@/lib/utils";
import { motion, useWillChange } from "framer-motion";
import { usePathname } from "next/navigation";

const Template = ({ children }: { children: React.ReactNode }) => {
  const willChange = useWillChange();

  const pathname = usePathname();

  return (
    <>
      <motion.div
        className="fixed top-0 inset-x-0 h-screen w-full bg-background z-50"
        animate={{
          top: "100%",
          transition: {
            duration: "0.3",
          },
        }}
        style={{ willChange }}
      ></motion.div>
      <motion.main
        className={cn(
          "overflow-hidden",
          pathname === "/" &&
            "sm:bg-gradient-77 from-[#ffb400] from-[25%] to-black to-[25%]",
        )}
      >
        <motion.div
          initial={{
            y: 70,
          }}
          animate={{
            y: 0,
            transition: {
              duration: 0.7,
            },
          }}
          className="max-w-[1480px] mx-auto px-6 sm:px-0"
          style={{ willChange }}
        >
          {children}
        </motion.div>
      </motion.main>
    </>
  );
};

export default Template;
