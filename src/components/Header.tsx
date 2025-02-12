import { FaShoppingBag } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex justify-between items-center min-h-11">
          <a href="/" className="-ml-10 flex h-11 items-center px-6">
            <IoLogoApple className="text-2xl" />{" "}
            <span className="sr-only">Back to homepage</span>
          </a>
          <a href="/" className="text-xs">Mac</a>
          <a href="/" className="text-xs">Store</a>
          <a href="/" className="text-xs">iPad</a>
          <a href="/" className="text-xs">iPhone</a>
          <a href="/" className="text-xs">Watch</a>
          <a href="/" className="text-xs">AirPods</a>
          <a href="/" className="text-xs">TV & Home</a>
          <a href="/" className="text-xs">Entertainment</a>
          <a href="/" className="text-xs">Accessories</a>
          <a href="/" className="text-xs">Support</a>
          <a href="/"><IoSearch className="text-xl" /></a>
          <a href="/"><FaShoppingBag className="text-xl" /></a>
        </Container>
      </header>
      <div className="bg-backgroundContrast sticky z-20 top-0 text-white">
        <Container className="flex justify-between items-center min-h-11">
          <p className="text-xl font-semibold">Apple TV+</p>{" "}
          <Button size="sm">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
