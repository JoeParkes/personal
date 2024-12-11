import { motion } from "framer-motion";
export default function Blob() {
  return (
    <>
      <motion.div
        animate={{
          opacity: 1,
          scale: [1.5, 1.2, 1.1],
        }}
        initial={{ opacity: 1, translateY: -100, translateX: -50 }}
        transition={{
          duration: 15,
          delay: 0.5,
          repeat: Infinity,
          scale: {
            duration: 15,
            repeat: Infinity,
          },
        }}
        style={{ transformOrigin: "center" }}
        className="w-full md:w-96 bg-[#E9982C] dark:bg-[#2a008c] fixed top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 h-48 rounded-full blur-3xl z-10"
      />
      <motion.div
        animate={{
          opacity: 1,
          scale: [1, 2.1, 1.3],
        }}
        initial={{ opacity: 1, translateY: -50, translateX: -150 }}
        transition={{
          duration: 15,
          delay: 0.5,
          repeat: Infinity,
          scale: {
            duration: 15,
            repeat: Infinity,
          },
        }}
        style={{ transformOrigin: "center" }}
        className="hidden md:block bg-[#E9982C] dark:bg-[#2a008c] fixed bottom-0 left-0 transform -translate-x-1/2 h-72 w-72 rounded-full blur-3xl z-10"
      />
    </>
  );
}
