import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Projects } from '@/app/types/types';
import Image from 'next/image';
import { filterCard } from '@/utils/filterCard';
import Techs from './Techs';
import { GitHub } from '../icons';
import Youtube from '../icons/Youtube';
import Close from '../icons/Close';
type ModalProps = {
  closeModal: () => void;
  searchCardInfoProject: (id: null) => void;
  project?: Projects | null;
};
const imageBackgroundName =
  'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682632542/images-users/bk9durne12qccuzcbi33.png';
export default function Modal({
  closeModal,
  searchCardInfoProject,
  project,
}: ModalProps) {
  useEffect(() => {
    return () => searchCardInfoProject(null);
  }, []);
  const techs = filterCard(project);
  const [viewYt, setViewYt] = useState<boolean>(false);
  const [selectImage, setSelectImage] = useState(0);
  const handleViewVideoYT = () => setViewYt(!viewYt);
  const utilBackendTech = techs?.backendTech && techs.backendTech.length > 0;
  return (
    <motion.div
      className="modal"
      initial={{
        translateX: 700,
        opacity: 0,
      }}
      animate={{
        translateX: 0,
        opacity: 1,
      }}
      exit={{
        translateX: 100,
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
        type: 'spring',
      }}
    >
      <section className="modal__container">
        <div className="modal__top">
          <span className="modal__name">{project?.name}</span>
          <button onClick={closeModal}>
            <Image
              src={
                'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682660101/images-users/xljfevpvbn9azjz1fhxv.png'
              }
              alt="close"
              width={30}
              height={30}
            />
          </button>
        </div>
        <div className="modal__content">
          <div className="modal__first">
            <div className="modal__imagess">
              {project?.imageDesktop
                .slice(selectImage, selectImage + 1)
                .map((image) => (
                  <Image
                    src={
                      image ??
                      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682633292/images-users/s6u623irokweux8n6zpn.png'
                    }
                    alt={String(project?.name)}
                    width={1000}
                    height={1000}
                    className="modal__image"
                  />
                ))}
              <div className="modal__buttons">
                {Array.from(
                  { length: project?.imageDesktop.length ?? 0 },
                  (_, index) => (
                    <button
                      className="modal__button"
                      data-button={index === selectImage}
                      onClick={() => setSelectImage(index)}
                    ></button>
                  ),
                )}
              </div>
            </div>
            <div className="modal__description">{project?.description}</div>
          </div>
          <div className="modal__techss">
            <div className="modal__techs--all">
              {utilBackendTech && (
                <Techs title="Backend" techs={techs?.backendTech} />
              )}
              {techs?.frontendMobile !== undefined &&
              techs.frontendMobile.length > 0 ? (
                <Techs techs={techs.frontendMobile} title="Mobile" />
              ) : (
                <Techs techs={techs?.frontendTech} title="Frontend" />
              )}
              <Techs title="Otros" techs={techs?.controllerTech} />
            </div>

            <div className="modal__links">
              <a href={project?.linkGithub} target="__blank">
                <GitHub height={35} width={35} color="#000" />
              </a>
              {project?.linkYoutube && (
                <button onClick={handleViewVideoYT}>
                  <Youtube height={35} width={35} color="#ff0000" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      {viewYt && (
        <div className="modal__youtube">
          <div className="modal__video">
            <div className="modal__youtube--close">
              <i className="modal__youtube--i" onClick={handleViewVideoYT}>
                <Close />
              </i>
            </div>
            <iframe
              width="100%"
              height="100%"
              src={project?.linkYoutube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
}
