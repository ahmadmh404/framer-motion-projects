import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

export const DraggableCard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CArd
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        }}
      >
        Card 2
      </CArd>
      <CArd
        style={{
          background: "linear-gradient(135deg, #fee7df 0%, #e489ca 100%)",
        }}
      >
        Card 2
      </CArd>
      <CArd
        style={{
          background: "linear-gradient(135deg, #f8a8ec 0%, #fecfef 99%)",
        }}
      >
        Card 2
      </CArd>
    </div>
  );
};

interface CardProps {
  children: ReactNode;
  style: CSSProperties;
}

const CArd = ({ children, style }: CardProps) => {
  return (
    <motion.div
      className="rounded-2xl shadow-lg p-5 m-2 w-52 h-72 flex items-center justify-center text-white text-xl"
      style={style}
      drag
      dragConstraints={{
        left: -200,
        right: 200,
        top: -200,
        bottom: 200,
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
