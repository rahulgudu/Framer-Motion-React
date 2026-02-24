import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AppleExperienceSection() {
  return (
    <section className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT CARD — Apple TV 4K */}
        <motion.div
          className="bg-white rounded-2xl p-12 relative overflow-hidden flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* TOP LOGO — ABSOLUTE */}
          <img
            src="/appletv4k.png"
            alt="Apple TV 4K"
            className="absolute -top-10 left-24 h-52 w-auto"
          />

          {/* CONTENT */}
          <div className="space-y-6 pt-18 text-center max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] leading-tight">
              The Apple experience. Cinematic in every sense.
            </h2>

            <div className="flex items-center justify-center gap-6 pt-2">
              <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition">
                Buy
              </button>

              <a
                href="#"
                className="text-[#0071e3] text-sm font-medium hover:underline">
                Learn more ›
              </a>
            </div>
          </div>

          {/* BOTTOM IMAGE — NORMAL FLOW */}
          <div className="mt-16 flex justify-center w-full">
            <img
              src="https://www.apple.com/v/apple-tv/a/images/overview/apple_tv_4k_remote__d8p48qpw1p26_small.jpg"
              alt="Apple TV 4K Remote"
              className="h-64 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* RIGHT CARD — AirPlay */}
        <motion.div
          className="bg-white rounded-2xl p-12 relative overflow-hidden flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* TOP LOGO — ABSOLUTE */}
          {/* <img
            src="/appletv4k.png"
            alt="Apple TV 4K"
            className="absolute -top-10 left-24 h-52 w-auto"
          /> */}
          <h1 className="text-3xl font-bold">AIRPLAY</h1>

          {/* CONTENT */}
          <div className="space-y-6 pt-8 text-center max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] leading-tight text-center">
              Bring Apple TV to <br /> a screen near you.
            </h2>

            <div className="flex items-center justify-center gap-6 pt-2">
              <a
                href="#"
                className="text-[#0071e3] text-sm font-medium hover:underline">
                Learn more ›
              </a>
            </div>
          </div>

          {/* BOTTOM IMAGE — NORMAL FLOW */}
          <div className="mt-16 flex justify-center w-full">
            <img
              src="https://www.apple.com/in/apple-tv/images/overview/air_play__ct4e55wswlyu_small.jpg"
              alt="Apple TV 4K Remote"
              className="h-64 w-auto object-contain ml-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
