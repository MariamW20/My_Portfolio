import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Links } from '../components/Links';
import { Blog } from '../components/Blog';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Blog />
      <Experience />
      <Links />
    </main>
  );
}

