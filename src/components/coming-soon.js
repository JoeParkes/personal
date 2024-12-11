import { motion } from "framer-motion";
import { LightBulbIcon } from "@heroicons/react/24/solid";

const ComingSoon = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="flex justify-center items-center z-20 relative"
    >
      <div className="flex flex-col items-center justify-center h-lvh">
        <p className="text-black font-poppins font-semibold text-4xl dark:text-white pb-4">
          Coming Soon 👀
        </p>
        <button
          className="relative font-poppins font-normal text-sm text-md bg-transparent rounded-full px-4 py-2 text-black dark:text-white  hover:cursor-pointer flex items-center gap-2 whitespace-nowrap before:absolute before:top-full before:right-0 before:left-auto before:w-full before:h-[1px] before:bg-current before:pointer-events-none before:content-[''] hover:before:animate-underline"
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
        >
          {" "}
          Light me
          <LightBulbIcon className="w-4 h-4 hover:cursor-pointer" />
        </button>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
