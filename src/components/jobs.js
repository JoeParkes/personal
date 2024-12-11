import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Hr from "./hr";
import { motion } from "framer-motion";

export default function Jobs() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="max-w-[600px] mx-auto"
      >
        <h2 className="font-playfair font-normal text-black text-md pb-2 text-left dark:text-white">
          Work Experience
        </h2>
        <Hr />

        <div className="text-black text-start flex flex-col gap-2 py-4 dark:text-white">
          <p className="flex flex-row items-center gap-4">
            {" "}
            Lovall - Lead Frontend Engineer{" "}
            <span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </p>
          <p className="flex flex-row items-center gap-4">
            {" "}
            Lounge - Frontend Engineer{" "}
            <span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </p>
          <p className="flex flex-row items-center gap-4">
            {" "}
            Clickthrough Marketing - Junior Frontend Developer{" "}
            <span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </p>
        </div>
      </motion.div>
    </>
  );
}
