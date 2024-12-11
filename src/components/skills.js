import { motion } from "framer-motion";
import Hr from "./hr";
const skills = [
  {
    name: "React",
    level: "Expert",
  },
  {
    name: "Typescript",
    level: "Expert",
  },
  {
    name: "Tailwind",
    level: "Expert",
  },
  {
    name: "Vue",
    level: "Expert",
  },
  {
    name: "Alpine JS",
    level: "Expert",
  },
  {
    name: "Laravel",
    level: "Expert",
  },
  {
    name: "Storybook",
    level: "Expert",
  },
  {
    name: "Git",
    level: "Expert",
  },
  {
    name: "Shopify",
    level: "Expert",
  },
  {
    name: "Teamwork",
    level: "Expert",
  },
  {
    name: "Management",
    level: "Expert",
  },
];

export default function Skills() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 2, delay: 1.5 }}
      className="max-w-[600px] mx-auto pt-6 z-20 relative"
    >
      <h2 className="font-playfair font-normal text-black text-md pb-2 text-left dark:text-white">
        Skills
      </h2>
      <Hr />
      <div className="flex items-center justify-start gap-2 flex-wrap pt-6">
        {skills.map((skill) => (
          <div className="bg-white w-fit h-fit rounded-full text-sm px-2.5 py-0.5 border border-[#e5e7eb] flex-1 whitespace-nowrap dark:bg-[#161616] dark:text-white dark:border-[#171717] max-w-fit hover:bg-black hover:text-white hover:border-black hover:dark:bg-white hover:dark:text-black hover:dark:border-white hover:cursor-pointer">
            {skill.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
