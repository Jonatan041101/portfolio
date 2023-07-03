'use client';
import React from 'react';
import { techsMap } from '../icons/TechsInformationId';
import CardIcon from './CardIcon';
import useView from '@/hooks/useView';

export default function Techs() {
  const { pageRef } = useView(1);

  return (
    <div className="tech" id="techs" ref={pageRef}>
      <h2 className="tech__h2">Tecnologias</h2>
      <section className="tech__section">
        {techsMap.map((tech, i) => (
          <article className="tech__techs" key={i}>
            <h3 className="tech__h3">{tech[0]}</h3>
            <div className="tech__map">
              {tech[1].map((icon, index) => (
                <CardIcon
                  key={icon.id}
                  tech={icon}
                  index={index}
                  top={tech[2]}
                  length={tech[1].length}
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
