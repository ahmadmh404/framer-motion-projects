import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        animate={{ rotate: 369 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-16 h-16 border-4 border-blue-500 rounded-full"
      >
        <motion.div
          className="absolute inset-0 border-blue-300 rounded-full border-t-transparent"
          animate={{
            borderWidth: ["4px", "2px", "1px", "2px", "4px"],
            borderColor: ["lightblue", "gray", "lightblue"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};
