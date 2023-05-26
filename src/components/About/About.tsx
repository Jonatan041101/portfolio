'use client';
import Image from 'next/image';
import React from 'react';
import ReactNative from '../icons/techs/ReactNative';
import Next from '../icons/techs/Next';
import Info from './Info';
import { motion } from 'framer-motion';
import useView from '@/hooks/useView';
interface AboutText {
  id: number;
  text: string;
}
// Estudie programacion en la secundaria, despues empece haciendo cursos en freecodecamp y youtube cuando supe que esto era lo mio quise ponerme a prueba y me inscribi en el bootcamp de soy HENRY.

// Dentro de Soy Henry, más que aprender a programar, aprendí a comunicarme con otras personas y mejorar mis soft skill teniamos un proyecto individual y uno grupal lo genial venía en el último mencionado porque teníamos reuniones todos los días, y un mentor que nos acompañaba en ese trayecto iba entendiendo como seria trabajar de desarrollador el día a día.

// A lo largo de mi carrera, he adquirido sólidos conocimientos en diferentes tecnologías y lenguajes de programación, como HTML, CSS, JavaScript, Typescript,Next.js,React-Native,React, Node.js, Express,Prisma,Sequelize y bases de datos SQL y no SQL. Tengo experiencia trabajando en proyectos tanto front-end como back-end, y me siento cómodo colaborando en equipos multidisciplinarios.

// Además de mi formación formal, estoy constantemente actualizándome en las últimas tendencias y tecnologías del mundo del desarrollo web y mobile. Me encanta estar al tanto de los avances y desafiar constantemente mis habilidades para mejorar como profesional.
// Después de Soy Henry tuve algunos trabajos de freelance junto a estos tuve que aprender en la marcha tecnologías que no había tocado tanto antes como Firebase, React Native y complementarlo con Typescript.
const aboutText: AboutText[] = [
  {
    id: 501,
    text: '¡Hola! Soy un programador full stack especializado en desarrollo web y mobile. Me apasiona crear aplicaciones y sitios web interactivos que brinden una experiencia excepcional a los usuarios. Mi formación académica incluye haber estudiado en Henry, una reconocida escuela de programación.',
  },
  {
    id: 502,
    text: 'Además de mi formación formal, estoy constantemente actualizándome en las últimas tendencias y tecnologías del mundo del desarrollo web y mobile. Me encanta estar al tanto de los avances y desafiar constantemente mis habilidades para mejorar como profesional.',
  },
  {
    id: 503,
    text: 'Si estás buscando un programador full stack apasionado y comprometido, estaré encantado de ser parte de tu equipo y contribuir al éxito de tus proyectos. No dudes en ponerse en contacto conmigo para discutir cómo puedo ayudarte a alcanzar tus objetivos.',
  },
  // {
  //   id: 504,
  //   text: 'Por último, y con todo lo que he contado hasta ahora quiero decir que soy una persona que le gusta aprender mucho más si tiene que ver con JavaScript pero en sí me gusta todo lo nuevo y también mejorar lo antiguo.',
  // },
];
export default function About() {
  const { pageRef } = useView(0);

  return (
    <motion.div className="about" id="about" ref={pageRef}>
      <h1 className="about__welcome">
        Hola, Bienvenido <span className="about__greetings">👋</span> soy
        Jonatan Valdiviezo Desarrollador <Info icons={[<Next />]} text="Web" />
        <span> y </span> <Info icons={[<ReactNative />]} text="Mobile" /> Full
        Stack
      </h1>
      <div className="about__container">
        <div className="about__item">
          <Image
            className="about__image"
            src="https://res.cloudinary.com/damjxqb5f/image/upload/v1685069121/zyro-image_1_wjehwr.png"
            alt="Perfil"
            width={500}
            height={500}
          />
          <div className="about__div">
            <p className="about__p">
              <a href="./downloads/CV.pdf" download className="about__a">
                Descargar CV
              </a>
              <span className="about__background" />
            </p>
          </div>
        </div>
        <div className="about__item">
          <h2 className="about__h2">Sobre Mi</h2>
          <ul className="about__ul">
            {aboutText.map((about) => (
              <li key={about.id}>{about.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
