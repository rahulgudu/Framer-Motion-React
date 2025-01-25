import { IoLogoApple } from "react-icons/io";
import Container from "./Container";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-11">
          <a href="/" className="-ml-6 flex h-11 items-center px-6">
            <IoLogoApple className="text-xl" />{" "}
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky top-0 text-white">
        <Container className="flex justify-between items-center min-h-11">
          <p className="text-xl font-semibold">Apple TV+</p> <Button size="sm">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
