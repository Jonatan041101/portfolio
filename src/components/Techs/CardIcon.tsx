'use client';
import React, { useState } from 'react';
import { Tech } from '../../app/types/types';
import Down from '../icons/Down';
import { AnimatePresence, motion } from 'framer-motion';
import { variantsProject } from '@/variants/opacity';
interface CardIconProps {
  tech: Tech;
  index: number;
  top: number;
  length: number;
}
const viewPosition = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
export default function CardIcon({ tech, index, top, length }: CardIconProps) {
  const [view, setView] = useState<boolean>(false);
  const openInfoTech = () => setView(true);
  const closeInfoTech = () => setView(false);
  let value: number = 0;
  viewPosition.some((arr, i) => {
    if (arr.includes(index)) {
      value = i;
      return true;
    }
  });
  console.log({ value });
  let positionDom =
    value === 0
      ? {
          left: '0%',
        }
      : value === 1
      ? {
          left: '-60px',
        }
      : value === 2
      ? {
          // left: '-100%',
          right: '0',
        }
      : {
          left: '0%',
        };
  if (length === 1) {
    positionDom = {
      left: '-60px',
    };
  }
  return (
    <article
      className="tech__article"
      onMouseEnter={openInfoTech}
      onMouseMove={openInfoTech}
      onMouseOut={closeInfoTech}
    >
      <div>{tech.icon}</div>
      <h3 className="tech__name">{tech.name}</h3>
      <AnimatePresence>
        {view && (
          <>
            <motion.div
              variants={variantsProject}
              initial={'closed'}
              animate={'open'}
              exit={'closed'}
              className="tech__description"
              style={{
                ...positionDom,
              }}
            >
              {tech.description}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </article>
  );
}
