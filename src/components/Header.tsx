import { FaShoppingBag } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import Container from "./Container";
import { useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  console.log(isOpen);

  return (
    <>
      <header className="bg-backgroundContrast text-white relative">
        <Container className="flex justify-between items-center min-h-11 relative">
          <a href="/" className="-ml-10 flex h-11 items-center px-6">
            <IoLogoApple className="text-2xl" />{" "}
            <span className="sr-only">Back to homepage</span>
          </a>
          <button
            className="text-xs"
            onMouseEnter={() => setIsOpen("Mac")}
            onMouseLeave={() => setIsOpen(null)}>
            Mac
          </button>
          <button className="text-xs" onMouseEnter={() => setIsOpen("Store")}>
            Store
          </button>
          <button className="text-xs" onMouseEnter={() => setIsOpen("iPad")}>
            iPad
          </button>
          <button className="text-xs" onMouseEnter={() => setIsOpen("iPhone")}>
            iPhone
          </button>
          <button className="text-xs" onMouseEnter={() => setIsOpen("Watch")}>
            Watch
          </button>
          <button className="text-xs" onMouseEnter={() => setIsOpen("AirPods")}>
            AirPods
          </button>
          <button
            className="text-xs"
            onMouseEnter={() => setIsOpen("Tv & Home")}>
            TV & Home
          </button>
          <a href="/" className="text-xs">
            Entertainment
          </a>
          <a href="/" className="text-xs">
            Accessories
          </a>
          <a href="/" className="text-xs">
            Support
          </a>
          <a href="/">
            <IoSearch className="text-xl" />
          </a>
          <a href="/">
            <FaShoppingBag className="text-xl" />
          </a>
        </Container>
        {isOpen !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full w-full bg-black text-white p-6 shadow-lg z-30">
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold">{isOpen}</h4>
                <ul className="mt-2 space-y-1">
                  <li>Shop the Latest</li>
                  <li>Mac</li>
                  <li>iPad</li>
                  <li>iPhone</li>
                  <li>Apple Watch</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Quick Links</h4>
                <ul className="mt-2 space-y-1">
                  <li>Find a Store</li>
                  <li>Order Status</li>
                  <li>Ways o Buyt</li>
                  <li>Personal Setup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Shop Special Stores</h4>
                <ul className="mt-2 space-y-1">
                  <li>Eduction</li>
                  <li>Business</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
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
