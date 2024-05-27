import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { MdDescription, MdCode, MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ProjectModal = ({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project;
}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`cursor-pointer rounded-lg overflow-hidden relative before:opacity-0 before:absolute before:inset-0 before:-top-2.5 before:z-10 before:bg-primary-portfolio before:content-data-content before:text-2xl before:flex before:items-center before:justify-center min-h-[240px] hover:before:opacity-100 hover:before:translate-y-[10px] before:transition-all before:duration-500`}
        data-content={project.name}
      >
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[70%] gap-8">
        <DialogHeader className="w-full text-primary-portfolio text-2xl sm:text-3xl font-bold items-center">
          {project.name}
        </DialogHeader>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
          <div className="grid gap-4 sm:gap-2 flex-1">
            <div className="flex items-center gap-0.5">
              <MdDescription size={"22"} />
              <p>Project:</p>
              <p className="font-bold">WEBSITE</p>
            </div>
            <div className="flex items-center gap-0.5">
              <MdOpenInNew size={"22"} />
              <p>Preview:</p>
              <Link
                className="font-bold text-primary-portfolio cursor-pointer"
                href={project.link}
                target="_blank"
              >
                LINK
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-2 flex-1">
            <div className="flex items-center gap-0.5">
              <MdCode size={"22"} />
              <p>Technology:</p>
              <p className="font-bold uppercase">{project.technology}</p>
            </div>
            <div className="flex items-center gap-0.5">
              <FaGithub size={"22"} />
              <p>Source code:</p>
              <Link
                className="font-bold text-primary-portfolio cursor-pointer"
                href={project.source}
                target="_blank"
              >
                LINK
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[250px] sm:h-[660px] rounded-lg overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            objectFit="cover"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
