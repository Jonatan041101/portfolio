import { Projects } from '@/app/types/types';
import React from 'react';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';
import { variantsProject } from '@/variants/opacity';
interface ProjectCardProps {
  project: Projects;
  changeInfoCardProject: (id: number) => void;
}

export default function ProjectCard({
  project,
  changeInfoCardProject,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={variantsProject}
      initial={'closed'}
      animate={'open'}
      exit={'closed'}
      className="projects__article"
      onClick={() => changeInfoCardProject(project.id)}
    >
      <ImageCard image={project.imageMobile} name={project.name} />
      <div className="projects__h4">
        <h4 className="projects__name">{project.name}</h4>
      </div>
    </motion.article>
  );
}
