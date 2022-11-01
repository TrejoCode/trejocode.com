/**
 * @description /index page
 */

import type { NextPage } from 'next';
import Image from 'next/image';
import PageLayout from 'components/Layouts/Page';
import { Button } from '@trejocode/uikit';
import ImageBanner from '../../public/img/hero-min.png';
import ImageArrowRight from '../../public/img/arrow-right.svg';
import ImageCV from '../../public/img/cv.svg';
import ImageSuperProf from '../../public/img/superprof.svg';
import ImageWoonkly from '../../public/img/woonkly.svg';
import ImageGitHub from '../../public/img/github-text.svg';
import ImageWebSlash from '../../public/img/web-slash.svg';
import ImageWebDesign from '../../public/img/design.svg';
import ImageMobile from '../../public/img/mobile.svg';
import ImageBook from '../../public/img/book.svg';
// Devicons
import IconHTML from '../../public/img/dev/html.svg';
import IconCSS from '../../public/img/dev/css.svg';
import IconJS from '../../public/img/dev/javascript.svg';
import IconTS from '../../public/img/dev/typescript.svg';
import IconReact from '../../public/img/dev/react.svg';
import IconNext from '../../public/img/dev/next.svg';
import IconJest from '../../public/img/dev/jest.svg';
import IconRedux from '../../public/img/dev/redux.svg';
import IconNode from '../../public/img/dev/node.svg';
import IconExpress from '../../public/img/dev/express.svg';
import IconNest from '../../public/img/dev/nestjs.svg';
import IconMySQL from '../../public/img/dev/mysql.svg';
import IconPostgreSQL from '../../public/img/dev/postgresql.svg';
import IconGit from '../../public/img/dev/git.svg';
import IconGitHub from '../../public/img/dev/github.svg';
import IconNPM from '../../public/img/dev/npm.svg';
import IconSASS from '../../public/img/dev/sass.svg';
import IconStorybook from '../../public/img/dev/storybook.svg';
import IconXd from '../../public/img/dev/xd.svg';
import IconFigma from '../../public/img/dev/figma.svg';
import IconMarkdown from '../../public/img/dev/markdown.svg';
import IconTailwind from '../../public/img/dev/tailwind.svg';
import IconAndroid from '../../public/img/dev/android.svg';
import IconApple from '../../public/img/dev/apple.svg';
import IconGradle from '../../public/img/dev/gradle.svg';
import IconSwift from '../../public/img/dev/swift.svg';
import IconFirebase from '../../public/img/dev/firebase.svg';
import IconVSCode from '../../public/img/dev/vscode.svg';
import IconHeroku from '../../public/img/dev/heroku.svg';
import IconAWS from '../../public/img/dev/aws.svg';
import IconDigitalOcean from '../../public/img/dev/digitalocean.svg';

// Samples
import ImageWeb from '../../public/img/placeholders/develop.jpg';
import ImageMe from '../../public/img/me.jpg';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <main className="w-full">
        <div className="flex justify-center">
          <div className="container flex flex-col">
            <div className="w-full flex items-center my-36">
              <div className="flex w-full flex-col">
                <h1 className="text-display-4 text-secondary-base font-bold mb-4">
                  ¡Hola, soy <span className="text-primary-base">Trejocode!</span>
                  <span role="img" aria-label="Grettings emoji">
                    👋
                  </span>
                </h1>
                <h2 className="text-2xl font-semibold text-secondaryAlt-base mb-1">
                  Desarrollo increíbles aplicaciones Web y móviles
                </h2>
                <h2 className="text-2xl font-semibold text-secondaryAlt-base">
                  Rápidas, intuitivas y autoadministrables
                </h2>
                <div className="flex my-5">
                  <Button variation="filled" color="primary" size="default" type="button">
                    <span className="mr-1">Conocer más</span>
                    <Image aria-hidden src={ImageArrowRight} alt="Arrow right icon" width={18} height={18} />
                  </Button>
                  <Button variation="filled" color="primaryAlt" size="default" type="button" classNames="ml-2">
                    <span className="mr-1">Descargar CV</span>
                    <Image aria-hidden src={ImageCV} alt="Document icon" width={18} height={18} />
                  </Button>
                </div>
              </div>
              <div className="flex w-full justify-center ml-12">
                <Image src={ImageBanner} alt="Mockup Web and App" />
              </div>
            </div>
            <div className="w-full flex flex-col mb-12">
              <div className="flex row items-center">
                <div className="flex-1 border-b border-b-neutral-200"></div>
                <span className="flex-1 text-center font-medium text-secondary">
                  Activamente colaborando con las mejores compañías
                </span>
                <div className="flex-1 border-b border-b-neutral-200"></div>
              </div>
              <div className="w-full flex justify-center items-center my-4">
                <a href="https://woonkly.com" target="_blank" rel="nofollow noreferrer" className="mr-2">
                  <Image src={ImageWoonkly} width={100} height={24} alt="Woonkly logo" />
                </a>
                <a href="https://bit.ly/3ngHBR7" target="_blank" rel="nofollow noreferrer" className="mr-2">
                  <Image src={ImageSuperProf} width={120} height={24} alt="Superprof logo" />
                </a>
                <a href="https://github.com/trejocode" target="_blank" rel="follow noreferrer">
                  <Image src={ImageGitHub} alt="Open Source Iniciative logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center bg-[#EBF3F5] py-24">
          <div className="container flex flex-col">
            <div className="service__item flex mb-24">
              <div className="w-1/2 flex justify-center items-center">
                <Image src={ImageWeb} alt="Web development" />
              </div>
              <div className="w-1/2">
                <div className="card w-4/5 flex flex-col bg-white py-12 px-10 rounded-3xl shadow">
                  <div className="icon flex justify-center items-center w-14 h-14 rounded-full bg-primary-base mb-5">
                    <Image src={ImageWebSlash} alt="Web development icon" />
                  </div>
                  <div className="title mb-5">
                    <h1 className="font-bold text-5xl text-secondary-base">Desarrollo Web</h1>
                  </div>
                  <div className="description mb-6">
                    <p className="text-secondary-base text-base font-medium">
                      Maquetación, programación, testing, DevOps, mantenimiento y SEO, son actividades obligatorias para
                      un desarrollo Web exitoso, acompañado de las mejores tecnologías.
                    </p>
                  </div>
                  <div className="cta mb-8">
                    <button
                      type="button"
                      className="bg-primary-base hover:bg-primary-lighten focus:bg-primary-darken focus:ring-primary-lighten focus:border-primary-lighten text-base font-semibold text-white py-3 px-6 flex items-center border-2 focus:outline-none focus:ring rounded-xl mr-2"
                    >
                      <span>Explorar proyectos Web</span>
                    </button>
                  </div>
                  <div className="w-full border-b-2 border-neutral-200 mb-6"></div>
                  <div className="stack flex items-center justify-between w-4/5 mb-5">
                    <Image src={IconHTML} width={32} height={32} alt="HTML icon" />
                    <Image src={IconCSS} width={32} height={32} alt="CSS icon" />
                    <Image src={IconJS} width={32} height={32} alt="JavaScript icon" />
                    <Image src={IconTS} width={32} height={32} alt="Typescript icon" />
                    <Image src={IconReact} width={32} height={32} alt="React icon" />
                    <Image src={IconRedux} width={32} height={32} alt="Redux icon" />
                    <Image src={IconNext} width={32} height={32} alt="Next icon" />
                    <Image src={IconJest} width={32} height={32} alt="Jest icon" />
                  </div>
                  <div className="stack flex items-center justify-between w-4/5">
                    <Image src={IconNode} width={32} height={32} alt="Node icon" />
                    <Image src={IconExpress} width={32} height={32} alt="Express icon" />
                    <Image src={IconNest} width={32} height={32} alt="Nest.js icon" />
                    <Image src={IconMySQL} width={32} height={32} alt="MySQL icon" />
                    <Image src={IconPostgreSQL} width={32} height={32} alt="PostgreSQL icon" />
                    <Image src={IconGit} width={32} height={32} alt="Git icon" />
                    <Image src={IconGitHub} width={32} height={32} alt="GitHub icon" />
                    <Image src={IconNPM} width={32} height={32} alt="NPM icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="service__item flex mb-24">
              <div className="w-1/2 flex justify-center items-center">
                <Image src={ImageWeb} alt="Web development" />
              </div>
              <div className="w-1/2">
                <div className="card w-4/5 flex flex-col bg-white py-12 px-10 rounded-3xl shadow">
                  <div className="icon flex justify-center items-center w-14 h-14 rounded-full bg-primaryAlt-base mb-5">
                    <Image src={ImageWebDesign} alt="Web design icon" />
                  </div>
                  <div className="title mb-5">
                    <h1 className="font-bold text-5xl text-secondary-base">Diseño Web</h1>
                  </div>
                  <div className="description mb-6">
                    <p className="text-secondary-base text-base font-medium">
                      Para que el sitio Web sobresalga entre las demás, debe contar con un diseño innovador y atrayente,
                      con ello transmitirá de la mejor forma lo grandioso del proyecto.
                    </p>
                  </div>
                  <div className="cta mb-8">
                    <button
                      type="button"
                      className="bg-primaryAlt-base hover:bg-primaryAlt-lighten focus:bg-primaryAlt-darken focus:ring-primaryAlt-lighten focus:border-primaryAlt-lighten text-base font-semibold text-white py-3 px-6 flex items-center border-2 focus:outline-none focus:ring rounded-xl mr-2"
                    >
                      <span>Explorar diseños Web</span>
                    </button>
                  </div>
                  <div className="w-full border-b-2 border-neutral-200 mb-6"></div>
                  <div className="stack flex items-center justify-between w-4/5">
                    <Image src={IconFigma} width={32} height={32} alt="Figma icon" />
                    <Image src={IconXd} width={32} height={32} alt="Adobe Xd icon" />
                    <Image src={IconHTML} width={32} height={32} alt="HTML icon" />
                    <Image src={IconCSS} width={32} height={32} alt="CSS icon" />
                    <Image src={IconSASS} width={32} height={32} alt="SASS icon" />
                    <Image src={IconTailwind} width={32} height={32} alt="Tailwind icon" />
                    <Image src={IconStorybook} width={32} height={32} alt="Storybook icon" />
                    <Image src={IconMarkdown} width={32} height={32} alt="Markdown icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="service__item flex mb-24">
              <div className="w-1/2 flex justify-center items-center">
                <Image src={ImageWeb} alt="Web development" />
              </div>
              <div className="w-1/2">
                <div className="card w-4/5 flex flex-col bg-white py-12 px-10 rounded-3xl shadow">
                  <div className="icon flex justify-center items-center w-14 h-14 rounded-full bg-secondary-base mb-5">
                    <Image src={ImageMobile} alt="Mobile app icon" />
                  </div>
                  <div className="title mb-5">
                    <h1 className="font-bold text-5xl text-secondary-base">Mobile Apps</h1>
                  </div>
                  <div className="description mb-6">
                    <p className="text-secondary-base text-base font-medium">
                      Para que el sitio Web sobresalga entre las demás, debe contar con un diseño innovador y atrayente,
                      con ello transmitirá de la mejor forma lo grandioso del proyecto.
                    </p>
                  </div>
                  <div className="cta mb-8">
                    <button
                      type="button"
                      className="bg-secondary-base hover:bg-secondary-lighten focus:bg-secondary-darken focus:ring-secondary-lighten focus:border-secondary-lighten text-base font-semibold text-white py-3 px-6 flex items-center border-2 focus:outline-none focus:ring rounded-xl mr-2"
                    >
                      <span>Explorar mobile apps</span>
                    </button>
                  </div>
                  <div className="w-full border-b-2 border-neutral-200 mb-6"></div>
                  <div className="stack flex items-center justify-between w-4/5">
                    <Image src={IconAndroid} width={32} height={32} alt="Android icon" />
                    <Image src={IconApple} width={32} height={32} alt="Apple icon" />
                    <Image src={IconGradle} width={32} height={32} alt="Gradle icon" />
                    <Image src={IconSwift} width={32} height={32} alt="Swift icon" />
                    <Image src={IconReact} width={32} height={32} alt="React icon" />
                    <Image src={IconRedux} width={32} height={32} alt="Redux icon" />
                    <Image src={IconFirebase} width={32} height={32} alt="Firebase icon" />
                    <Image src={IconMarkdown} width={32} height={32} alt="Markdown icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="service__item flex mb-24">
              <div className="w-1/2 flex justify-center items-center">
                <Image src={ImageWeb} alt="Web development" />
              </div>
              <div className="w-1/2">
                <div className="card w-4/5 flex flex-col bg-white py-12 px-10 rounded-3xl shadow">
                  <div className="icon flex justify-center items-center w-14 h-14 rounded-full bg-secondaryAlt-base mb-5">
                    <Image src={ImageBook} alt="Book icon" />
                  </div>
                  <div className="title mb-5">
                    <h1 className="font-bold text-5xl text-secondary-base">Mentorías</h1>
                  </div>
                  <div className="description mb-6">
                    <p className="text-secondary-base text-base font-medium">
                      Domina tecnologías Web, desde 0 hasta diseñador/desarrollador Web y Android, capacitaciones
                      presenciales o en línea, próximamente más cursos.
                    </p>
                  </div>
                  <div className="cta mb-8">
                    <button
                      type="button"
                      className="bg-secondaryAlt-base hover:bg-secondaryAlt-lighten focus:bg-secondaryAlt-darken focus:ring-secondaryAlt-lighten focus:border-secondaryAlt-lighten text-base font-semibold text-white py-3 px-6 flex items-center border-2 focus:outline-none focus:ring rounded-xl mr-2"
                    >
                      <span>Conocer más</span>
                    </button>
                  </div>
                  <div className="w-full border-b-2 border-neutral-200 mb-6"></div>
                  <div className="stack flex items-center justify-between w-4/5">
                    <Image src={IconHTML} width={32} height={32} alt="HTML icon" />
                    <Image src={IconCSS} width={32} height={32} alt="CSS icon" />
                    <Image src={IconJS} width={32} height={32} alt="JavaScript icon" />
                    <Image src={IconNode} width={32} height={32} alt="Node icon" />
                    <Image src={IconVSCode} width={32} height={32} alt="Visual Studio Code icon" />
                    <Image src={IconHeroku} width={32} height={32} alt="Heroku icon" />
                    <Image src={IconAWS} width={32} height={32} alt="AWS icon" />
                    <Image src={IconDigitalOcean} width={32} height={32} alt="Digital Ocean icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-center text-xl color-secondaryAlt-base font-medium">
                <span className="font-semibold">¡Trabajemos juntos! </span>
                Mi pasión es desarrollar parte del futuro, cuénteme su idea y haré todo lo demás.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center bg-white py-24">
          <div className="container flex flex-col">
            <div className="flex">
              <div className="w-1/2 flex justify-center items-center">
                <figure className="mr-8">
                  <Image src={ImageMe} alt="Trejocode photo" className="rounded-2xl" />
                  <figcaption className="font-medium text-center mt-2 text-secondary-base">
                    Me, feliz porque visitas mi Web
                  </figcaption>
                </figure>
              </div>
              <div className="w-1/2 flex flex-col">
                <h2 className="font-bold text-4xl text-secondary-base mb-8">
                  <span className="text-primaryAlt-base">{'{'} </span>
                  Me: Sergio Alejandro Trejo
                  <span className="text-primaryAlt-base"> {'}'}</span>
                </h2>
                <p className="font-semibold text-lg text-secondary-base mb-5">
                  Ingeniero en Software, entusiasta del desarrollo Web, desde Cancún, México{' '}
                  <span role="img" aria-label="Beach emoji">
                    🏖️
                  </span>
                </p>
                <p className="font-medium text-lg text-secondary-base mb-4">
                  Cursé en la Universidad Politécnica de Quintana Roo la Ingeniería en Software en generación 2015 -
                  2018
                </p>
                <p className="font-medium text-lg text-secondary-base mb-8">
                  Durante mi formación adquirí conocimiento en desarrollo Web, apps móviles, sistemas operativos y
                  desarrollo de Software en general.
                </p>
                <h3 className="font-bold text-2xl text-secondary-base mb-6">
                  <span className="text-primaryAlt-base">{'{'} </span>
                  Empleo
                  <span className="text-primaryAlt-base"> {'}'}</span>
                </h3>
                <p className="font-medium text-lg text-secondary-base mb-4">
                  <span className="font-semibold">Actualidad: </span>
                  <a href="https://www.woonkly.com" target="_blank" rel="nofollow noreferrer">
                    Woonkly
                  </a>{' '}
                  - Ssr Frontend Developer
                </p>
                <p className="font-medium text-lg text-secondary-base mb-8">
                  <span className="font-semibold">Mentoría: </span>
                  <a href="https://bit.ly/3ngHBR7" target="_blank" rel="nofollow noreferrer">
                    Superprof
                  </a>{' '}
                  - Web development mentor
                </p>
                <h3 className="font-bold text-2xl text-secondary-base mb-6">
                  <span className="text-primaryAlt-base">{'{'} </span>
                  2022
                  <span className="text-primaryAlt-base"> {'}'}</span>
                </h3>
                <p className="font-medium text-lg text-secondary-base mb-4">
                  - Convertirme en Blockchain Developer, hola Web 3.0
                </p>
                <p className="font-medium text-lg text-secondary-base mb-4">
                  - Dominar Accesibilidad Web, ninguna discapacidad debe limitar la Web
                </p>
                <p className="font-medium text-lg text-secondary-base mb-4">- Empezar en el idioma Portugués</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Home;
