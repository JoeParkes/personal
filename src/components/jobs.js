import Hr from "./hr";
import { motion } from "framer-motion";
import ArrowRightUp from "./icons/arrow-right-up";

export default function Jobs() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="max-w-[600px]"
      >
        <h2 className="font-poppins font-normal text-black text-md pb-2 text-start dark:text-white">
          Work Experience
        </h2>
        <Hr />

        <div className="text-black text-start flex flex-col gap-2 py-4 dark:text-white">
          <p className="flex flex-row items-center gap-4">
            {" "}
            Lovall - Lead Frontend Engineer{" "}
            {/* <span>
              <ArrowRightUp />
            </span> */}
          </p>
          <p className="flex flex-row items-center gap-4">
            {" "}
            Lounge - Frontend Engineer{" "}
            {/* <span>
              <ArrowRightUp />
            </span> */}
          </p>
          <p className="flex flex-row items-center gap-4">
            {" "}
            Clickthrough Marketing - Junior Frontend Developer{" "}
            {/* <span>
              <ArrowRightUp />
            </span> */}
          </p>
        </div>
      </motion.div>
    </>
  );
}
