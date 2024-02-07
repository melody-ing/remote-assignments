import Headers from "./Headers";
import Nav from "./Nav";
import Boxs from "./Section/Boxs";
import Section from "./Section";

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
