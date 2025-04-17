import { useParams } from 'react-router-dom';
import {projects} from '../data/projects'; // wherever your data is stored

const Project = () => {
  const { id } = useParams(); // 'id' or 'slug', depending on your route
  const project = projects.find((p) => p.id === id); // or use slug if needed

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <img src={project.img} alt={project.title} className="mt-4 rounded" />
      <p className="mt-4">{project.description}</p>
      {/* Add stacks, live links, etc. */}
    </div>
  );
};

export default Project;
