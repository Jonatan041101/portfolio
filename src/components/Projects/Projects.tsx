'use client';
import React, { useLayoutEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import InfoCard from './InfoCard/InfoCard';
import { Projects } from '@/app/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { variantsProject } from '@/variants/opacity';
import useChangeProjectsCard, {
  viewWidth,
} from '@/hooks/useChangeProjectsCard';
import Modal from '../Modal/Modal';
import ProjectsAllCards from './ProjectsAllCards';
import { allProjects } from './map/projectsMap';
import useView from '@/hooks/useView';

export default function Projects() {
  const {
    onClickCardProject,
    project,
    projects,
    view,
    viewCardInfo,
    closeModal,
    openModal,
    viewModal,
    projectModal,
    searchCardInfoProject,
  } = useChangeProjectsCard();
  const { pageRef } = useView(2);

  return (
    <section className="projects" id="projects" ref={pageRef}>
      <h2 className="projects__h2">Proyectos</h2>
      <div className="projects__background" />
      <div className="projects__div">
        {viewCardInfo > viewWidth ? (
          <ProjectsAllCards
            onClickCardProject={onClickCardProject}
            projects={projects}
          />
        ) : (
          <ProjectsAllCards
            onClickCardProject={onClickCardProject}
            projects={allProjects}
          />
        )}
        {viewCardInfo > viewWidth && (
          <motion.div
            className="projects__single"
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            variants={variantsProject}
          >
            <AnimatePresence>
              {view && <InfoCard project={project} openModal={openModal} />}
            </AnimatePresence>
          </motion.div>
        )}
        <AnimatePresence>
          {viewModal && (
            <Modal
              project={projectModal}
              closeModal={closeModal}
              searchCardInfoProject={searchCardInfoProject}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
