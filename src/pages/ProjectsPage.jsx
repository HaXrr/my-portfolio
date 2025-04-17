import React, { lazy, Suspense } from "react";
import { projects } from "../data/projects";
import LoadingPage from "./LoadingPage";
import Pagination from "../components/Pagination";

// Lazy load the ProjectCard component
const ProjectCard = lazy(() => import("../ui/ProjectCard"));

const ProjectsPage = () => {
  return (
    <div className="mt-[2.4rem] w-full">
      <Pagination title={"projects"} subtitle={"List of my projects"} />
      <Suspense fallback={<LoadingPage />}>
        <ProjectCard projects={projects} />
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
