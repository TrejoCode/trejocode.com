import Banner from 'components/Home/Banner';
import Services from 'components/Home/Services';
import About from 'components/Home/About';
import Projects from 'components/Home/Projects';
import Contact from 'components/Home/Contact';

const PageHome = () => {
  return (
    <div className="w-full">
      <Banner />
      <Services />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default PageHome;
