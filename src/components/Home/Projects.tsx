/**
 * @description Componente <Projects /> de la página de inicio
 */

import { useState } from 'react';
import { Button } from '@trejocode/uikit';
import CardProject from 'components/Cards/Projects';
import { CARDS_DATA } from 'components/Cards/Projects/data';

// Carga inicial de datos
const INITIAL_LIMIT: number = 9;

const Projects = (): JSX.Element => {
  const [limit, setLimit] = useState<number>(INITIAL_LIMIT);

  return (
    <div className="w-full flex justify-center bg-[#EBF3F5] py-16 pb-6 lg:py-24 lg:pb-4" id="proyectos">
      <div className="container flex flex-col">
        <div className="flex flex-col mb-16">
          <h2 className="text-center text-5xl font-bold xl:text-display-4 text-secondary-base mb-4">
            <span className="text-primary-base animate-pulse">_</span>
            Proyectos
          </h2>
          <p className="text-center text-lg text-secondary-base font-medium">
            Colección de proyectos en los que he trabajado en mi trayectoria como desarrollador esto es lo que hago y
            amo hacer.
          </p>
        </div>
        <div className="w-full flex flex-row flex-wrap justify-center gap-8">
          {CARDS_DATA?.slice(0, limit)?.map((project, key) => (
            <CardProject
              key={key}
              image={project?.image}
              title={project?.title}
              url={project?.url}
              description={project?.description}
              tags={project?.tags}
            />
          ))}
        </div>
        <div className="w-full flex justify-center mt-8">
          {limit === INITIAL_LIMIT && (
            <Button color="primary" size="default" variation="filled" onClick={() => setLimit(CARDS_DATA.length)}>
              Mostrar todos los proyectos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
