import { Projects } from '@/app/types/types';
export const initialProject: Projects = {
  id: 200,
  description:
    'En resumen, este proyecto es un clon de la página de Dota 2, realizado utilizando Next.js, Framer Motion, TypeScript y SCSS. Permite a los usuarios explorar información detallada sobre el juego, héroes, comunidad y torneos, replicando el estilo y diseño de la página original. El uso de animaciones y diseño responsivo proporciona una experiencia atractiva y agradable para los fanáticos de Dota 2.',
  imageDesktop:
    'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682657522/images-users/ms1ofemab8vliuxmjped.png',
  imageMobile:
    'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682531383/images-users/fbrf4ilxa9zhqsyvcixp.png',
  name: 'DOTA 2',
  techsFrontend: [123, 126, 127, 128],
  techsBackend: [110, 111, 113, 117, 118],
  techsController: [140],
  linkGithub: 'https://github.com/Jonatan200V/DotaVersion2',
};

export const projectsMap: Projects[] = [
  // {
  //   id: 201,
  //   description: '',
  //   imageDesktop: '',
  //   imageMobile:
  //     'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682535504/images-users/c483csnqvfattgps7kao.png',
  //   name: 'Wenjei Wallet',
  //   techsFrontendMobile: [130, 131, 132],
  //   techsBackend: [114],
  //   techsController: [140],
  // },
  {
    id: 202,
    description:
      'En resumen, este proyecto es una versión responsive de la tienda de juegos de Stadia, desarrollada utilizando TypeScript, SCSS y HTML.',
    imageDesktop:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685074300/Captura_de_pantalla_2023-05-26_011109_pkvxpa.png',
    imageMobile:
      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682555554/images-users/vntpwdr8fcblumoughur.jpg',
    name: 'Stadia Store',
    techsFrontend: [123, 120, 127],
    techsBackend: [],
    techsController: [140],
  },
  {
    id: 203,
    description: '',
    imageDesktop: '',
    imageMobile:
      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682555562/images-users/oxmcei2azcsv82sksvnx.png',
    name: 'Dogs PI Soy Henry',
    techsFrontendMobile: [130, 131, 132],
    techsBackend: [114],
    techsController: [140],
  },
  // {
  //   id: 204,
  //   description: '',
  //   imageDesktop:
  //     'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682657522/images-users/ms1ofemab8vliuxmjped.png',
  //   imageMobile:
  //     'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682555565/images-users/yldlokfc4oyfecce61xf.png',
  //   name: 'Pokemon',
  //   techsFrontendMobile: [130, 131, 132],
  //   techsBackend: [114],
  //   techsController: [140],
  // },
  {
    id: 205,
    description:
      'En resumen, este proyecto es una plataforma de videojuegos que utiliza la API de videojuegos para mostrar información detallada sobre juegos, con una página de inicio, una página de videojuegos con filtros de búsqueda, una página de detalle y la funcionalidad de agregar a favoritos. Está desarrollado utilizando Next.js, TypeScript, SCSS y Zustand, brindando una experiencia interactiva y personalizada para los amantes de los videojuegos.',
    imageDesktop:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685073764/videogames_g2c1vd.png',
    imageMobile:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685053766/Captura_de_pantalla_2023-05-25_191448_ouycpq.png',
    name: 'VideoGames',
    // techsFrontendMobile: [130, 131, 132],
    techsBackend: [],
    techsController: [140],
    techsFrontend: [120, 121, 123, 126, 127],
  },
  {
    id: 206,
    description:
      'En resumen, este proyecto es un juego de memoria interactivo que combina la diversión de encontrar las parejas de Pokémon con una experiencia única gracias a la terminal de movimientos y poderes. Está desarrollado utilizando Next.js, TypeScript y SCSS, y ofrece la posibilidad de guardar el progreso y disfrutar del juego en diferentes dispositivos.',
    imageDesktop:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685053835/Captura_de_pantalla_2023-05-25_191945_whwzq1.png',
    imageMobile:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685053819/Captura_de_pantalla_2023-05-25_192018_nk0kts.png',
    name: 'Poke-Memory',
    // techsFrontendMobile: [130, 131, 132],
    techsBackend: [],
    techsController: [140],
    linkYoutube: 'https://www.youtube.com/watch?v=EhId-4WEOqg',
    linkGithub: 'https://github.com/Jonatan041101/poke-memory',
    linkDeploy: 'https://master--fascinating-chebakia-29a8d2.netlify.app/',
    techsFrontend: [120, 121, 123, 126, 127],
  },
];

export const allProjects: Projects[] = [...projectsMap, initialProject];
