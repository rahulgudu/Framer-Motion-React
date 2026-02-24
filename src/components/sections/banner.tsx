import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AppleMusicStudentBanner() {
  return (
    <section className="w-full py-32 px-6">
      <motion.div
        className="relative max-w-7xl mx-auto rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Gradient Background (TOP → BOTTOM) */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-800 via-red-600 to-pink-400" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center text-white px-6"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Icons (TOP) */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <img
              src="https://www.apple.com/v/apple-tv/a/images/overview/student_plan_chiclets__ehveu9tnnn6u_small.png"
              alt="Apple Music & Apple TV"
              className="h-16 w-auto"
            />
          </motion.div>

          {/* Heading (CENTER) */}
          <motion.h1
            variants={fadeUp}
            className="text-2xl md:text-4xl font-semibold leading-tight max-w-3xl"
          >
            Get Apple TV for free with <br />
            the Apple Music <br />
            Student Plan.<sup className="text-sm ml-1">5</sup>
          </motion.h1>

          {/* CTA (BOTTOM) */}
          <motion.div variants={fadeUp} className="mt-12 mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium transition-transform hover:scale-[1.04] active:scale-[0.96]">
              Try Apple Music free
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}