import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div className="absolute bottom-0 left-2 md:left-[unset] md:right-0 flex flex-col items-center justify-center z-20 p-3">
      <h2 className="font-satoshi text-white text-7xl md:text-6xl lg:text-8xl text-left">
        JOE PARKES
      </h2>
    </motion.div>
  );
};

export default Title;
