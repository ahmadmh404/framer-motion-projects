import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-[200vh] p-5">
      {/* Red Line */}
      <motion.div
        className="fixed top-0 left-0 h-[px] bg-red-500"
        style={{ width: lineWidth, transition: "width 0.2 ease" }}
      />

      {/* Random Text */}
      <div className="mt-12">
        {[...Array(50)].map((_, idx) => (
          <p key={idx} className="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor in
            nihil aliquid dolorem itaque. Soluta, mollitia odit officia
            assumenda rerum labore accusamus eum molestias iste culpa quo
            doloremque cumque non!
          </p>
        ))}
      </div>
    </div>
  );
};
