import SinglePersonalInfo from "./singlePersonalInfo";
import AnimatedButton from "../global/animatedButton";
import { MdFileDownload } from "react-icons/md";

const PersonalInfoSection = () => {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-8 sm:gap-0 pt-10">
      <div className="grid gap-6 flex-1">
        <p className="text-[1.8rem] tracking-[0.5px]">PERSONAL INFOS</p>
        <div className="flex items-center gap-4 sm:gap-16">
          <div className="grid gap-6">
            {infos.slice(0, 4).map((info, i) => (
              <SinglePersonalInfo
                label={info.label}
                value={info.value}
                key={i}
              />
            ))}
          </div>
          <div className="grid gap-6">
            {infos.slice(4).map((info, i) => (
              <SinglePersonalInfo
                label={info.label}
                value={info.value}
                key={i}
              />
            ))}
          </div>
        </div>
        <a href={"/mahmoud-helal-cv.pdf"} download="mahmoud helal">
          <AnimatedButton>
            <p className="font-semibold text-[13px]">DOWNLOAD CV</p>
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary-portfolio flex items-center justify-center">
              <MdFileDownload
                style={{
                  scale: 1.5,
                }}
              />
            </div>
          </AnimatedButton>
        </a>
      </div>
      <div className="flex items-center gap-4 flex-1">
        <div className="p-4 grid gap-4 rounded-[5px] shadow-[0_0_4px_#ffffff2b] flex-1">
          <p className="text-5xl font-bold text-primary-portfolio relative after:content-['+'] after:text-primary-portfolio after:absolute after:top-0 after:text-3xl">
            1.5
          </p>
          <p className="max-w-[160px] tracking-[1px] ml-16 relative before:absolute before:top-2 before:-left-16 before:w-8 before:rounded-full before:h-[0.5px] before:bg-primary-portfolio">
            YEARS OF PROGRAMING EXPERINCE
          </p>
        </div>
        <div className="p-4 grid gap-4 rounded-[5px] shadow-[0_0_4px_#ffffff2b] flex-1">
          <p className="text-5xl font-bold text-primary-portfolio relative after:content-['+'] after:text-primary-portfolio after:absolute after:top-0 after:text-3xl">
            10
          </p>
          <p className="tracking-[1px] ml-16 relative before:absolute before:top-2 before:-left-16 before:w-8 before:rounded-full before:h-[0.5px] before:bg-primary-portfolio">
            AWESOME PROJECTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;

const infos = [
  {
    label: "First Name",
    value: "Mahmoud",
  },
  {
    label: "Age",
    value: "25",
  },
  {
    label: "Freelance",
    value: "Available",
  },
  {
    label: "Phone",
    value: "+20 01029862568",
  },
  {
    label: "Last Name",
    value: "Helal",
  },
  {
    label: "Nationality",
    value: "Egyption",
  },
  {
    label: "Address",
    value: "Beni Suef",
  },
  {
    label: "Languages",
    value: "Arabic, English",
  },
] as const;
