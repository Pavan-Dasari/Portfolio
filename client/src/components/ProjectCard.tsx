import { motion } from "framer-motion";
import { Link } from "wouter";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      className="project-card bg-[hsl(var(--card))] rounded-xl overflow-hidden shadow-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))/50] h-full flex flex-col"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <div className="text-[hsl(var(--primary))] text-sm font-medium mb-3">{project.role}</div>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="font-medium text-[hsl(var(--accent))] text-sm mb-6">
            <span className="block">Result: {project.result}</span>
          </div>
        </div>
        <div className="mt-auto">
          <Link href={`/projects/${project.id}`} className="inline-block px-4 py-2 bg-transparent border border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded hover:bg-[hsl(var(--primary))/10] transition-colors duration-300">
            View Case Study
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
