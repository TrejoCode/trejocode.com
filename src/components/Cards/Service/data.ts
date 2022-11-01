/**
 * @description Datos de muestra
 */

import ImageWebSlash from 'assets/images/web-slash.svg';
import ImageWebDesign from 'assets/images/design.svg';
import ImageMobile from 'assets/images/mobile.svg';
import ImageBook from 'assets/images/book.svg';
import IconExpress from 'assets/images/dev/express.svg';
import IconNest from 'assets/images/dev/nestjs.svg';
import IconMySQL from 'assets/images/dev/mysql.svg';
import IconPostgreSQL from 'assets/images/dev/postgresql.svg';
import IconGit from 'assets/images/dev/git.svg';
import IconGitHub from 'assets/images/dev/github.svg';
import IconNPM from 'assets/images/dev/npm.svg';
import IconTS from 'assets/images/dev/typescript.svg';
import IconNext from 'assets/images/dev/next.svg';
import IconJest from 'assets/images/dev/jest.svg';
import IconHTML from 'assets/images/dev/html.svg';
import IconCSS from 'assets/images/dev/css.svg';
import IconJS from 'assets/images/dev/javascript.svg';
import IconReact from 'assets/images/dev/react.svg';
import IconRedux from 'assets/images/dev/redux.svg';
import IconNode from 'assets/images/dev/node.svg';
import IconSASS from 'assets/images/dev/sass.svg';
import IconStorybook from 'assets/images/dev/storybook.svg';
import IconXd from 'assets/images/dev/xd.svg';
import IconFigma from 'assets/images/dev/figma.svg';
import IconMarkdown from 'assets/images/dev/markdown.svg';
import IconTailwind from 'assets/images/dev/tailwind.svg';
import IconAndroid from 'assets/images/dev/android.svg';
import IconApple from 'assets/images/dev/apple.svg';
import IconGradle from 'assets/images/dev/gradle.svg';
import IconSwift from 'assets/images/dev/swift.svg';
import IconFirebase from 'assets/images/dev/firebase.svg';
import IconVSCode from 'assets/images/dev/vscode.svg';
import IconHeroku from 'assets/images/dev/heroku.svg';
import IconAWS from 'assets/images/dev/aws.svg';
import IconDigitalOcean from 'assets/images/dev/digitalocean.svg';
import { InterfaceCardProps } from './index.types';

export const CARDS_DATA: InterfaceCardProps[] = [
  {
    icon: ImageWebSlash,
    title: 'Desarrollo Web',
    description:
      'Maquetación, programación, testing, DevOps, mantenimiento y SEO, son actividades obligatorias para un desarrollo Web exitoso, acompañado de las mejores tecnologías.',
    btnLabel: 'Explorar proyectos Web',
    icons: [
      {
        icon: IconHTML,
        alt: 'HTML',
      },
      {
        icon: IconCSS,
        alt: 'CSS',
      },
      {
        icon: IconJS,
        alt: 'Javascript',
      },
      {
        icon: IconTS,
        alt: 'Typescript',
      },
      {
        icon: IconReact,
        alt: 'React.js',
      },
      {
        icon: IconRedux,
        alt: 'Redux',
      },
      {
        icon: IconNext,
        alt: 'Next.js',
      },
      {
        icon: IconJest,
        alt: 'Jest',
      },
      {
        icon: IconNode,
        alt: 'Node.js',
      },
      {
        icon: IconExpress,
        alt: 'Express.js',
      },
      {
        icon: IconNest,
        alt: 'Nest.js',
      },
      {
        icon: IconMySQL,
        alt: 'MySQL',
      },
      {
        icon: IconPostgreSQL,
        alt: 'PostgreSQL',
      },
      {
        icon: IconGit,
        alt: 'Git',
      },
      {
        icon: IconGitHub,
        alt: 'GitHub',
      },
      {
        icon: IconNPM,
        alt: 'NPM',
      },
    ],
    color: 'primary',
  },
  {
    icon: ImageWebDesign,
    title: 'Diseño Web',
    description:
      'Para que el sitio Web sobresalga entre las demás, debe contar con un diseño innovador y atrayente, con ello transmitirá de la mejor forma lo grandioso del proyecto.',
    btnLabel: 'Explorar diseños Web',
    icons: [
      {
        icon: IconFigma,
        alt: 'Figma',
      },
      {
        icon: IconXd,
        alt: 'Adobe XD',
      },
      {
        icon: IconHTML,
        alt: 'HTML',
      },
      {
        icon: IconCSS,
        alt: 'CSS',
      },
      {
        icon: IconSASS,
        alt: 'SASS',
      },
      {
        icon: IconTailwind,
        alt: 'Tailwindcss',
      },
      {
        icon: IconStorybook,
        alt: 'Storybook',
      },
      {
        icon: IconMarkdown,
        alt: 'Markdown',
      },
    ],
    color: 'primaryAlt',
  },
  {
    icon: ImageMobile,
    title: 'Mobile Apps',
    description:
      'Para que el sitio Web sobresalga entre las demás, debe contar con un diseño innovador y atrayente, con ello transmitirá de la mejor forma lo grandioso del proyecto.',
    btnLabel: 'Explorar apps móviles',
    icons: [
      {
        icon: IconAndroid,
        alt: 'Android',
      },
      {
        icon: IconApple,
        alt: 'Apple IOS',
      },
      {
        icon: IconGradle,
        alt: 'Gradle',
      },
      {
        icon: IconSwift,
        alt: 'Swift',
      },
      {
        icon: IconReact,
        alt: 'React Native',
      },
      {
        icon: IconRedux,
        alt: 'Redux',
      },
      {
        icon: IconFirebase,
        alt: 'Firebase',
      },
      {
        icon: IconMarkdown,
        alt: 'Markdown',
      },
    ],
    color: 'secondary',
  },
  {
    icon: ImageBook,
    title: 'Mentorías',
    description:
      'Domina tecnologías Web, desde 0 hasta diseñador/desarrollador Web y Android, capacitaciones presenciales o en línea, próximamente más cursos.',
    btnLabel: 'Solicitar mentorías',
    icons: [
      {
        icon: IconHTML,
        alt: 'HTML',
      },
      {
        icon: IconCSS,
        alt: 'CSS',
      },
      {
        icon: IconJS,
        alt: 'Javascript',
      },
      {
        icon: IconNode,
        alt: 'Node.js',
      },
      {
        icon: IconVSCode,
        alt: 'Visual Studio Code',
      },
      {
        icon: IconHeroku,
        alt: 'Heroku',
      },
      {
        icon: IconAWS,
        alt: 'Amazon Web Services',
      },
      {
        icon: IconDigitalOcean,
        alt: 'DigitalOcean',
      },
    ],
    color: 'secondaryAlt',
  },
];
