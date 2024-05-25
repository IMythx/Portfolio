import ExtrasAndEducation from "@/components/about/extrasAndEducation";
import PersonalInfoSection from "@/components/about/personalInfosSection";
import SkillsSection from "@/components/about/skillsSection";
import ProfileImage from "@/components/home/profileImage";

const Page = () => {
  return (
    <div className="pt-0 sm:pt-[3.2rem]">
      <h1
        className="font-extrabold text-center py-8 w-full text-4xl sm:text-[56px] tracking-[1px]"
        style={{
          WebkitTextStrokeWidth: "3.4px",
        }}
      >
        ABOUT <span className="text-primary-portfolio">ME</span>
      </h1>
      <div className="sm:hidden w-full flex justify-center">
        <ProfileImage />
      </div>
      <PersonalInfoSection />
      <SkillsSection />
      <ExtrasAndEducation />
    </div>
  );
};

export default Page;
