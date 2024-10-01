import { Main } from "../layout/Main";
import { Present } from "../components/Present";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experiece";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <Main>

      <div className="app font-poppins text-white">
        <Present />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Main>
  );
}
