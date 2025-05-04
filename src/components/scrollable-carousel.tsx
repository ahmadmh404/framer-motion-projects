import { useRef } from "react";
import { Card } from "./card";
import { useScroll, useTransform, motion } from "framer-motion";
import { cards } from "../../utils/index";

export const ScrrollableCarousdel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="relative w-full h-[120vh] bg-neutral-900" ref={targetRef}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-4" style={{ x }}>
          {cards.map((card, idx) => (
            <Card idx={idx} card={card} key={idx} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
