import Header from "./components/Header";
import AppleTVUI from "./components/sections/appletvui";
import Carousel from "./components/sections/carousel";
import Hero from "./components/sections/hero";
import Usps from "./components/sections/usps";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <Carousel />
        <AppleTVUI />
      </main>
    </>
  );
}
export default App;
