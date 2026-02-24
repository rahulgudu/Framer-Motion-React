import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AppleOneSection() {
  return (
    <section className="bg-[#f5f5f7] py-28 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}>
        {/* LEFT SIDE */}
        <motion.div variants={fadeUp} className="space-y-8 max-w-lg">
          {/* Apple One Logo */}
          <img src="/apple-one.png" alt="Apple One" className="h-12 w-auto" />

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-[#1d1d1f]">
            Bundle Apple TV+ <br />
            with three other <br />
            great services. And <br />
            enjoy more for less.
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-[1.03] active:scale-[0.97]">
              Try Apple One free
            </button>

            <button className="border border-black px-6 py-3 rounded-full text-sm font-medium transition-colors hover:bg-black hover:text-white">
              Learn more
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE – EXACT IMAGE */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center md:justify-end">
          <img
            src="https://www.apple.com/in/apple-tv/images/overview/apple_services_logos__ckrmxglbwt8i_small.png"
            alt="Apple Services"
            className="w-[230px] md:w-[250px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
