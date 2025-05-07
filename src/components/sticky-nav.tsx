import { motion } from "framer-motion";
import { Card } from "./Card-2";
import { cards } from "../../utils";

const navVariants = {
  hidden: { height: "5.6rem" },
  visible: {
    height: "29rem",
    transition: {
      duration: 0.3,
    },
  },
};

const expandNavVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

export const StickyNav = () => {
  return (
    <div className="bg-black min-h-screen">
      <motion.div
        className="fixed top-0 w-full p-8 bg-white text-black rounded-lg shadow-lg"
        variants={navVariants}
        initial="hidden"
        whileHover="visible"
      >
        <div className="fle flex-col">
          <div className="flex items-cneter justify-between">
            <div className="flex items-center">
              <div className="ml-2 fon uppercase">Ahmad</div>
            </div>

            <div className="hidden md:flex space-x-5 text-center">
              <a href="" className="text-black">
                Products
              </a>
              <a href="" className="text-black">
                Usecases
              </a>
              <a href="" className="text-black">
                Resources
              </a>
              <a href="" className="text-black">
                Pricing
              </a>
            </div>

            <div className="flex items-center">
              <a href="" className="text-black font-medium">
                Join
              </a>
            </div>
          </div>

          <motion.div
            className="flex flex-col py-6"
            variants={expandNavVariants}
          >
            <span className="block w-full h-px bg-gray-200"></span>
            <motion.div
              className="flex items-center mt-4"
              custom={1}
              variants={expandNavVariants}
            >
              <span className="block border border-black rounded-full px-2 text-xs">
                Apple
              </span>

              <p className="ml-2">Macbook Pro</p>
            </motion.div>

            <motion.div
              className="flex"
              custom={1}
              variants={expandNavVariants}
            >
              <Card
                title="my amazing card."
                desc="Lorem, ipsum dolor sit amet.?"
                imageURL={cards[Card.length - 1].url}
              ></Card>
              <Card
                title="my amazing card."
                desc="Lorem, ipsum dolor sit amet.?"
                imageURL={cards[Card.length - 1].url}
              ></Card>
              <Card
                title="my amazing card."
                desc="Lorem, ipsum dolor sit amet.?"
                imageURL={cards[Card.length - 1].url}
              ></Card>
              <Card
                title="my amazing card."
                desc="Lorem, ipsum dolor sit amet.?"
                imageURL={cards[Card.length - 1].url}
              ></Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
