import { IoBagCheck } from "react-icons/io5";
const ExtrasAndEducation = () => {
  return (
    <div className="grid gap-10 mt-16 sm:mt-20 mb-32 sm:mb-20">
      <p className="font-bold text-3xl text-center">
        EXTRACURRICULARS & EDUCATION
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-16 sm:gap-36">
        <div className="flex gap-6">
          <div className="relative before:absolute before:h-full before:w-[1px] before:bg-white before:top-0 before:left-1/2 before:translate-x-1/2 before:z-[-1] before:opacity-20 isolate">
            <div className="flex items-center justify-center bg-primary-portfolio rounded-full w-10 h-10">
              <IoBagCheck
                style={{
                  scale: 1.1,
                }}
              />
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-full bg-stone-700 py- px-2 w-fit">
              <p className="opacity-70 text-xs">2018-2022</p>
            </div>
            <div className="grid gap-3">
              <p className="text-xl">
                BACHELOR DEGREE
                <span className="opacity-70"> - BENI SUEF UNIVERSITY</span>
              </p>
              <p className="opacity-70 text-sm">
                Bachelor degree in Geographic information systems
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="relative before:absolute before:h-full before:w-[1px] before:bg-white before:top-0 before:left-1/2 before:translate-x-1/2 before:z-[-1] before:opacity-20 isolate">
            <div className="flex items-center justify-center bg-primary-portfolio rounded-full w-10 h-10">
              <IoBagCheck
                style={{
                  scale: 1.1,
                }}
              />
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-full bg-stone-700 py- px-2 w-fit">
              <p className="opacity-70 text-xs">2022</p>
            </div>
            <div className="grid gap-3">
              <p className="text-xl">
                UDEMY CTF
                <span className="opacity-70"> - REACT JS</span>
              </p>
              <p className="opacity-70 text-sm">
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtrasAndEducation;
