import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../ui/ProjectCard";
import LineSroke from "../assets/Line.svg";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="text-body text-gray">
      <div className="flex justify-between mb-[4.8rem]">
        <div className="sm:flex gap-[1.6rem] font-semibold">
          <h2 className="text-headingSecondary mb-[1rem] ">
            <span className="text-primary">#</span>projects
          </h2>
          <img src={LineSroke} className="" />
        </div>
        <a
          href="/Projects"
          className="cursor-pointer flex justify-center items-center"
        >
          {/* Icon - visible on all screen sizes */}

          {/* Text - visible on large screens */}
          <span className="hidden sm:block ml-2">View all</span>
          <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
        </a>
      </div>
      <div>
        <ProjectCard projects={projects} />
      </div>
    </div>
  );
}
