import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>Hero Component</Container>
        </div>
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
