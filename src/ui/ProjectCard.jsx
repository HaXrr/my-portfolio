import { Link } from "react-router-dom";
import Button from "./Button";

export default function ProjectCard({ projects }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  px-4 sm:px-6 md:px-8 mb-[10.6rem] w-full">
  {projects.map((project) => (
    <div
      key={project.id}
      className="text-white shadow-lg overflow-hidden border border-gray w-full"
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full p-1 outline outline-primary object-cover max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] object-center"
      />

      <div className="flex flex-wrap gap-2 border-t border-b border-gray w-full px-2 py-2">
        {project.stacks?.map((stack, index) => (
          <span
            key={index}
            className="text-sm px-2 py-1 bg-[#1f1f1f] rounded"
          >
            {stack}
          </span>
        ))}
      </div>

      <div className="p-4 flex flex-col gap-2 w-full">
        <h2 className="text-lg sm:text-xl font-semibold break-words">
          {project.title}
        </h2>
        <div className="mt-4 flex justify-center sm:justify-start">
          <Link to={`/projects/${project.id}`}>
            <Button Btn="Click Here" />
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

    
    );
  }
  