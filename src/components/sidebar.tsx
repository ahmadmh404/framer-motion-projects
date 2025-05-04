import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const sidebarVariants = {
  open: { x: 0, opacity: 1, scale: 1 },
  closed: { x: "-100%", opacity: 0, scale: 0.8 },
};

const navVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },

  closed: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  open: { scale: 1, opacity: 1, y: 0 },
  closed: { scale: 0.95, opacity: 0, y: -20 },
};

const backdropVariants = {
  open: { opacity: 0.6 },
  closed: { opacity: 0 },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Backdrop */}
      <motion.div
        className="fixed w-full h-full top-0 left-0 bg-gray-700"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={backdropVariants}
        transition={{
          duration: 0.3,
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Content */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="fixed top-0 left-0 h-full w-64 text-white shadow-lg bg-gray-900"
        variants={sidebarVariants}
      >
        <div className="w-full p-4">
          <button
            className="absolute top-4 right-4 z-10 p-2 bg-gray-700 rounded-full focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <BsArrowRight />
          </button>

          <h2 className="font-bold text-2xl mb-3">Filters</h2>
          <motion.div
            className="w-full space-y-4"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={navVariants}
          >
            <motion.div variants={itemVariants} className="w-full">
              <h3 className="text-xl font-semibold">Categories</h3>

              <ul>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 1</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 2</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 3</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Option 4</span>
                  </label>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-xl">Price range</h3>

              <input
                type="range"
                min={0}
                max={100}
                step={5}
                className="w-full"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <h3 className="text-xl font-semibold">Rating</h3>

              <ul>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="rating"
                      value={1}
                      className="form-radio"
                    />
                    <span className="ml-2">Option 1</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="rating"
                      value={2}
                      className="form-radio"
                    />
                    <span className="ml-2">Option 2</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="rating"
                      className="form-radio"
                      value={3}
                    />
                    <span className="ml-2">Option 3</span>
                  </label>
                </li>
                <li>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="rating"
                      className="form-radio"
                      value={4}
                    />
                    <span className="ml-2">Option 4</span>
                  </label>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <button
        className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 px-4 py-2 bg-sky-500 z-10 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close sidebar" : "Open sidebar"}
      </button>
    </div>
  );
};
