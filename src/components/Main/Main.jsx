import Formation from './Formation/Formation';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

export default function Main({ darkMode }) {
  return (
    <div className="lg:p-4 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:mr-20 xl:mr-40">
      <About />
      <Formation darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}
