"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { FaEnvelope } from "react-icons/fa";
import { IoPersonSharp, IoBagCheck } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useWillChange } from "framer-motion";

const iconsStyle = {
  scale: 1.1,
};

const tabs = [
  {
    name: "HOME",
    icon: <AiFillHome style={iconsStyle} />,
  },
  {
    name: "ABOUT",
    icon: <IoPersonSharp style={iconsStyle} />,
  },
  {
    name: "GALLERY",
    icon: <IoBagCheck style={iconsStyle} />,
  },
  {
    name: "CONTACT",
    icon: <FaEnvelope style={iconsStyle} />,
  },
] as const;

const SideBar = () => {
  const willChange = useWillChange();

  const pathname = usePathname();

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <aside className="fixed bottom-0 sm:bottom-auto sm:top-1/2 inset-x-0 sm:right-8 sm:left-auto sm:-translate-y-1/2 z-[9999999]">
      <nav className="">
        <ul
          className={`flex sm:flex-col w-full sm:w-auto sm:gap-5 justify-between sm:justify-start bg-background sm:bg-transparent sm:bottom-auto py-2 px-6 sm:p-0 [&>li]:cursor-pointer [&>li:hover]:bg-primary-portfolio [&>li]:p-[18px] [&>li]:rounded-full [&>li]:relative [&>li]:z-10 [&>li]:flex [&>li]:items-center [&>li]:justify-center`}
        >
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={cn(
                "bg-[#444]  sm:bg-background cursor-pointer",
                pathname.split("/")[1] === tab.name.toLowerCase() &&
                  "!bg-primary-portfolio",
                pathname === "/" &&
                  tab.name === "HOME" &&
                  "!bg-primary-portfolio",
              )}
            >
              <Link
                href={tab.name === "HOME" ? "/" : tab.name.toLowerCase()}
                className={`[&>div]:hover:-left-24 [&>div]:hover:opacity-100 [&>div>p]:hover:pl-0 [&>div>p]:hover:opacity-100`}
              >
                {tab.icon}
                {!isMobile && (
                  <motion.div
                    style={{ willChange }}
                    className="absolute inset-0 -left-16 px-4 rounded-full z-[-10] transition-all duration-500 bg-primary-portfolio flex items-center opacity-0"
                  >
                    <p className="pl-4 opacity-0 transition-all duration-500">
                      {tab.name}
                    </p>
                  </motion.div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
