import Button from "../Button";
import Container from "../Container";

const Hero = () => {
  return (
    <div className="relative  text-white bg-background">
      <div className="absolute left-0 top-0 w-full">
        <img src="/posters/herobg.jpg" className="h-[90vh] w-full" />
        <div className="bg-background absolute inset-0 opacity-50"></div>
      </div>
      <Container className="relative z-10 pb-7 min-h-[100svh] flex flex-col justify-center space-y-12 items-start">
        <h1 className="mt-20 text-5xl font-bold leading-[1.05]">
          All Apple Orignal. <br />
          Only on Apple TV+
        </h1>
        <Button className="mb-16" size="lg">
          Stram Now
        </Button>
        <p className="font-semibold">Watch on the app</p>
      </Container>
    </div>
  );
};

export default Hero;
