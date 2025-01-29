import Container from "../Container";
import FadeIn from "../fade-in";

const Usps = () => {
  return (
    <Container className="z-10 relative text-4xl text-white font-bold space-y-16 leading-[1.1] max-w-[692px] py-36">
      <FadeIn>
        <p>New Apple Originals every month - always ad-free</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spartial Audio</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscripton with up to five people</p>
      </FadeIn>
    </Container>
  );
};

export default Usps;
