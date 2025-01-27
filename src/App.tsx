import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/sections/hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div>
          <Container>upsc</Container>
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
        <div>
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}
export default App;
