<<<<<<< HEAD
import Headers from "./Headers";
import Nav from "./Nav";
import Boxs from "./Section/Boxs";
import Section from "./Section";
=======
import { Headers } from "./Headers";
import { Nav } from "./Nav/Nav";
import { Boxs } from "./Section/Boxs";
import { Section } from "./Section/Section";
>>>>>>> 234c389ea046719a97b0ae6514a6d1f82ad27d21

function App() {
  return (
    <>
      <Nav />
      <Headers />
      <Section>
        <Boxs />
      </Section>
    </>
  );
}

export default App;
