import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import Container from "./Container";
import { useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="bg-backgroundContrast text-white relative">
        <Container className="flex justify-between items-center min-h-11 relative">
          <a href="/" className="-ml-10 flex h-11 items-center px-6">
            <IoLogoApple className="text-2xl" />{" "}
            <span className="sr-only">Back to homepage</span>
          </a>

          {/* Desktop Navgation */}
          <div className="hidden md:flex space-x-14">
            {[
              "Mac",
              "Store",
              "iPad",
              "iPhone",
              "Watch",
              "AirPods",
              "TV & Home",
              "Entertainment",
              "Accessories",
              "Support",
            ].map((item) => (
              <button
                key={item}
                className="text-xs"
                onMouseEnter={() => setIsOpen(item)}
                onMouseLeave={() => setIsOpen(null)}>
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-10">
            <a href="/">
              <IoSearch className="text-xl" />
            </a>
            <a href="/">
              <FaShoppingBag className="text-xl" />
            </a>

            {/* Hamburger Menu */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
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

        {/* mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute left-0 top-full w-full bg-black text-white p-6 shadow-lg z-30">
            <ul className="space-y-4">
              {[
                "Mac",
                "Store",
                "iPad",
                "iPhone",
                "Watch",
                "AirPods",
                "TV & Home",
                "Entertainment",
                "Accessories",
                "Support",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm border-b border-gray-700 pb-2">
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
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
