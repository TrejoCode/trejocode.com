/**
 * @description Página principal "/"
 */

import PageLayout from 'components/Layout';
import Banner from 'components/Home/Banner';
import Services from 'components/Home/Services';
import About from 'components/Home/About';
import Projects from 'components/Home/Projects';
import Contact from 'components/Home/Contact';

export default function Home() {
  return (
    <div className="w-full">
      <PageLayout>
        <main className="w-full">
          <div className="flex justify-center">
            <div className="container flex flex-col">
              <Banner />
            </div>
          </div>
          <Services />
          <About />
          <Projects />
          <Contact />
        </main>
      </PageLayout>
    </div>
  );
}
