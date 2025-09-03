'use client';

import { Button } from '@trejocode/uikit';
import CardProject from 'components/Cards/Project/Project';
import { useHomeController } from 'controllers/home/controller';

const Projects = () => {
  const { projects, projectLimit, setProjectLimit, initialLimit } = useHomeController();

  return (
    <div className="flex w-full justify-center bg-[#EBF3F5] py-16 pb-6 lg:py-24 lg:pb-4" id="proyectos">
      <div className="container flex flex-col">
        <div className="mb-16 flex flex-col">
          <h2 className="xl:text-display-4 text-secondary-base mb-4 text-center text-5xl font-bold">
            <span className="text-primary-base animate-pulse">_</span>
            Proyectos
          </h2>
          <p className="text-secondary-base text-center text-lg font-medium">
            Colección de proyectos en los que he trabajado en mi trayectoria como desarrollador esto es lo que hago y
            amo hacer.
          </p>
        </div>
        <div className="flex w-full flex-row flex-wrap justify-center gap-8">
          {projects.slice(0, projectLimit)?.map((project, key) => (
            <CardProject
              key={key}
              url={project?.url}
              tags={project?.tags}
              image={project?.image}
              title={project?.title}
              description={project?.description}
            />
          ))}
        </div>
        <div className="mt-8 flex w-full justify-center">
          {projectLimit === initialLimit && (
            <Button color="primary" size="default" onClick={() => setProjectLimit(projects.length)}>
              Mostrar todos los proyectos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
