import { Main } from "../layout/Main";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
export function Home() {
  return (
    <Main>

      <div className="app font-poppins">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Main>
  );
}
