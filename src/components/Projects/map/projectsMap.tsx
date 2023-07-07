import { Projects } from '@/app/types/types';
// export const initialProject: Projects = {
//   id: 200,
//   description:
//     'En resumen, este proyecto es un clon de la página de Dota 2, realizado utilizando Next.js, Framer Motion, TypeScript y SCSS. Permite a los usuarios explorar información detallada sobre el juego, héroes, comunidad y torneos, replicando el estilo y diseño de la página original. El uso de animaciones y diseño responsivo proporciona una experiencia atractiva y agradable para los fanáticos de Dota 2.',
//   imageDesktop:
//     'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682657522/images-users/ms1ofemab8vliuxmjped.png',
//   imageMobile:
//     'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682531383/images-users/fbrf4ilxa9zhqsyvcixp.png',
//   name: 'DOTA 2',
//   techsFrontend: [123, 126, 127, 128],
//   techsBackend: [110, 111, 113, 117, 118],
//   techsController: [140],
//   linkGithub: 'https://github.com/Jonatan200V/DotaVersion2',
// };
export const initialProject: Projects = {
  id: 203,
  description:
    'En resumen, la aplicación de ecommerce de productos de PC que creé permite a los usuarios explorar, personalizar y comprar componentes de PC de manera fácil y segura. Con un catálogo amplio, opciones de personalización, filtros de búsqueda, integración con Mercado Pago, comentarios y ampliación de imágenes.',
  imageDesktop: [
    'https://res.cloudinary.com/damjxqb5f/image/upload/v1688414264/Captura_de_pantalla_2023-06-28_123230_c4kylf.png',
    'https://res.cloudinary.com/damjxqb5f/image/upload/v1688418459/Captura_de_pantalla_2023-06-28_123335_qt0na7.png',
    'https://res.cloudinary.com/damjxqb5f/image/upload/v1688418461/Captura_de_pantalla_2023-06-28_123307_ksocit.png',
    'https://res.cloudinary.com/damjxqb5f/image/upload/v1688418463/Captura_de_pantalla_2023-06-28_123444_totfqy.png',
    'https://res.cloudinary.com/damjxqb5f/image/upload/v1688418464/Captura_de_pantalla_2023-06-28_123425_clepim.png',
  ],
  imageMobile:
    'https://res.cloudinary.com/damjxqb5f/image/upload/v1688414234/Captura_de_pantalla_2023-06-28_122854_yfxrhj.png',

  name: 'Ecommerce Gamer',
  techsFrontend: [123, 125, 126, 127],
  techsBackend: [110, 111, 113, 115, 117, 118],
  techsController: [140],
  linkGithub: 'https://github.com/Jonatan041101/space-gamer',
  linkYoutube: 'https://www.youtube.com/embed/nE_3n04cwOc',
};
export const projectsMap: Projects[] = [
  {
    id: 202,
    description:
      'En resumen, este proyecto es una versión responsive de la tienda de juegos de Stadia, desarrollada utilizando TypeScript, SCSS y HTML.',
    imageDesktop: [
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685074300/Captura_de_pantalla_2023-05-26_011109_pkvxpa.png',
    ],
    imageMobile:
      'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682555554/images-users/vntpwdr8fcblumoughur.jpg',
    name: 'Stadia Store',
    techsFrontend: [123, 120, 127],
    techsBackend: [],
    techsController: [140],
  },

  {
    id: 205,
    description:
      'En resumen, este proyecto es una plataforma de videojuegos que utiliza la API de videojuegos para mostrar información detallada sobre juegos, con una página de inicio, una página de videojuegos con filtros de búsqueda, una página de detalle y la funcionalidad de agregar a favoritos. Está desarrollado utilizando Next.js, TypeScript, SCSS y Zustand, brindando una experiencia interactiva y personalizada para los amantes de los videojuegos.',
    imageDesktop: [
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685073764/videogames_g2c1vd.png',
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688419497/Captura_de_pantalla_2023-05-25_191520_byozks.png',
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688419496/Captura_de_pantalla_2023-05-25_191622_srk7us.png',
    ],
    imageMobile:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685053766/Captura_de_pantalla_2023-05-25_191448_ouycpq.png',
    name: 'VideoGames',
    // techsFrontendMobile: [130, 131, 132],
    techsBackend: [],
    techsController: [140],
    techsFrontend: [120, 121, 123, 126, 127],
    linkGithub: 'https://github.com/Jonatan041101/videogames',
    linkDeploy: 'https://main--gleaming-stardust-11d51a.netlify.app/',
    linkYoutube: 'https://www.youtube.com/embed/5u-xnHeFF_o',
  },
  {
    id: 206,
    description:
      'En resumen, este proyecto es un juego de memoria interactivo que combina la diversión de encontrar las parejas de Pokémon con una experiencia única gracias a la terminal de movimientos y poderes. Está desarrollado utilizando Next.js, TypeScript y SCSS, y ofrece la posibilidad de guardar el progreso y disfrutar del juego en diferentes dispositivos.',
    imageDesktop: [
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685053835/Captura_de_pantalla_2023-05-25_191945_whwzq1.png',
    ],
    imageMobile:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685053819/Captura_de_pantalla_2023-05-25_192018_nk0kts.png',
    name: 'Poke-Memory',
    techsBackend: [],
    techsController: [140],
    linkYoutube: 'https://www.youtube.com/embed/EhId-4WEOqg',
    linkGithub: 'https://github.com/Jonatan041101/poke-memory',
    linkDeploy: 'https://master--fascinating-chebakia-29a8d2.netlify.app/',
    techsFrontend: [120, 121, 123, 126, 127],
  },
  {
    id: 207,
    description:
      'El proyecto Tateti es una aplicación web desarrollada con Next.js que permite disfrutar del clásico juego "Tateti" con dos modos de juego: contra bots y versus local. Con una interfaz de usuario moderna y fácil de usar, los usuarios podrán desafiar a bots inteligentes o competir entre sí en partidas emocionantes. ¡Diviértete estrategizando para ganar en este popular juego de ingenio mientras disfrutas de una experiencia visualmente atractiva!',
    imageDesktop: [
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685248287/Captura_de_pantalla_2023-05-27_220711_zrk6dp.png',
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688419401/Captura_de_pantalla_2023-05-27_220535_kmhz2b.png',
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688419400/Captura_de_pantalla_2023-05-27_220723_lum43o.png',
    ],
    imageMobile:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1685248298/Captura_de_pantalla_2023-05-27_220654_zsds0l.png',
    name: 'TA-TE-TI',
    techsBackend: [],
    techsController: [140],
    linkYoutube: 'https://www.youtube.com/embed/PFk5zZuQ9aA',
    linkGithub: 'https://github.com/Jonatan041101/ta-te-ti',
    linkDeploy: 'https://master--helpful-halva-3740f0.netlify.app/',
    techsFrontend: [120, 121, 123, 126, 127],
  },
  {
    id: 208,
    description:
      'Desarrollé una aplicación web innovadora de gestión de listas de compras. Permite agregar, crear y eliminar artículos, ofrece historial detallado de compras, estadísticas de productos y categorías, y un gráfico interactivo. Interfaz intuitiva y experiencia de usuario optimizada. ',
    imageDesktop: [
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688764004/Captura_de_pantalla_2023-07-07_175914_p396ve.png',
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688764004/Captura_de_pantalla_2023-07-07_175922_q9y4vs.png',
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688764005/Captura_de_pantalla_2023-07-07_175932_yac2cx.png',
    ],
    imageMobile:
      'https://res.cloudinary.com/damjxqb5f/image/upload/v1688764004/Captura_de_pantalla_2023-07-07_175948_iaepfb.png',
    name: 'VideoGames',
    // techsFrontendMobile: [130, 131, 132],
    techsBackend: [110, 111, 113, 117, 118],
    techsController: [140],
    techsFrontend: [123, 126, 127],
    linkGithub: 'https://github.com/Jonatan041101/shopingify-frontend',
    // linkDeploy: 'https://main--gleaming-stardust-11d51a.netlify.app/',
    linkYoutube: 'https://www.youtube.com/watch?v=KVOw0-aBeI4',
  },
];

export const allProjects: Projects[] = [...projectsMap, initialProject];
