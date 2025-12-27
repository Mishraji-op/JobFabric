import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      
      {/* Animated Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-blue-500/20 blur-3xl animate-pulse" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div variants={item}>
            <h1 className="text-3xl font-extrabold text-white">
              Job<span className="text-[#6A38C2]">Fabric</span>
            </h1>
            <p className="text-sm mt-4 leading-relaxed text-gray-400">
              A modern job portal helping you connect with top companies and
              unlock your future.
            </p>
          </motion.div>

          {/* Jobs */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold text-white mb-4">Jobs</h2>
            <ul className="space-y-3">
              {["Browse Jobs", "Remote Jobs", "Internships", "Top Companies"].map(
                (link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    className="relative cursor-pointer text-sm text-gray-400 hover:text-white transition"
                  >
                    {link}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6A38C2] transition-all group-hover:w-full" />
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold text-white mb-4">Resources</h2>
            <ul className="space-y-3">
              {["Career Tips", "Resume Builder", "Interview Prep", "Blog"].map(
                (link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    className="cursor-pointer text-sm text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold text-white mb-4">
              Stay in the loop
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Weekly job updates. No spam.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-l-md bg-gray-900 border border-gray-700 text-sm text-white outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6A38C2] px-5 py-2 rounded-r-md text-sm font-semibold text-white shadow-lg shadow-purple-500/30"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={item}
          className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} JobFabric. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Support</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
