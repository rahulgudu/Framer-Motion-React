import Header from "./components/Header";
import AppleOneSection from "./components/sections/appleOne";
import AppleTVUI from "./components/sections/appletvui";
import AppleMusicStudentBanner from "./components/sections/banner";
import Carousel from "./components/sections/carousel";
import FAQS from "./components/sections/faqs";
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
        <FAQS />
        <AppleOneSection />
        <AppleMusicStudentBanner />
      </main>
    </>
  );
}
export default App;
