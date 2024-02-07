import { Headers } from "./Headers";
import { Nav } from "./Nav/Nav";
import { Boxs } from "./Section/Boxs";
import { Section } from "./Section/Section";

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
