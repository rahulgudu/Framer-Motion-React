import Header from "./components/Header";
import Carousel from "./components/sections/carousel";
import Hero from "./components/sections/hero";
import Usps from "./components/sections/usps";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <Carousel />
        <div className="h-[300vh]"></div>
      </main>
    </>
  );
}
export default App;
