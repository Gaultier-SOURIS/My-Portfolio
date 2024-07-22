import Formation from './Formation/Formation';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

export default function Main() {
  return (
    <div className="lg:p-4 lg:absolute lg:right-0 lg:top-0 lg:w-2/3">
      <About />
      <Formation />
      <Projects />
      <Contact />
    </div>
  );
}
