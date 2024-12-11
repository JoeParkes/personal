import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import { LightBulbIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";

export default function Header() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="flex flex-col justify-center pb-10 items-center md:items-center z-20 relative"
      >
        {/* Mobile */}
        <div className="flex flex-row gap-3 items-center justify-center pt-6 pb-6 md:hidden w-full">
          <button
            className="font-poppins font-normal text-sm bg-transparent rounded-full px-4 py-2 text-black dark:text-white  hover:cursor-pointer flex items-center gap-2 whitespace-nowrap"
            onClick={open}
          >
            Message me <ChatBubbleOvalLeftIcon className="w-4 h-4" />
          </button>
          <button
            className="text-black font-poppins font-normal text-sm dark:text-white flex items-center gap-2 whitespace-nowrap px-4 py-2"
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
          >
            {" "}
            Light me
            <LightBulbIcon className="w-4 h-4 hover:cursor-pointer" />
          </button>
        </div>

        <h2 className="font-playfair font-normal text-black text-5xl dark:text-white pb-6">
          Hey! I'm <strong>Joe</strong>
        </h2>

        <div className="flex flex-row items-center justify-center gap-2 w-full">
          <h2 className="font-playfair font-normal text-black text-left text-lg md:text-2xl pb-2 dark:text-white md:text-center">
            Crafting awesome user interfaces{" "}
          </h2>
        </div>

        <p className="font-poppins font-normal text-sm text-black dark:text-white max-w-md mx-auto">
          I'm a software engineer based in the UK. I'm passionate about creating
          user-friendly and efficient web applications.
        </p>

        <div className="flex-row gap-3 justify-center items-center pt-6 pb-6 hidden md:flex">
          <button className="relative font-poppins font-normal text-sm text-md bg-transparent rounded-full px-4 py-2 text-black dark:text-white  hover:cursor-pointer flex items-center gap-2 whitespace-nowrap before:absolute before:top-full before:right-0 before:left-auto before:w-full before:h-[1px] before:bg-current before:pointer-events-none before:content-[''] hover:before:animate-underline">
            Github <ArrowUpRightIcon className="w-4 h-4" />
          </button>
          <button
            className="relative font-poppins font-normal text-sm text-md bg-transparent rounded-full px-4 py-2 text-black dark:text-white  hover:cursor-pointer flex items-center gap-2 whitespace-nowrap before:absolute before:top-full before:right-0 before:left-auto before:w-full before:h-[1px] before:bg-current before:pointer-events-none before:content-[''] hover:before:animate-underline"
            onClick={open}
          >
            Message me <ChatBubbleOvalLeftIcon className="w-4 h-4" />
          </button>
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

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-30 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border border-[#e5e7eb] dark:border-none"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black dark:text-white"
              >
                Contact Me
              </DialogTitle>
              <p className="mt-2 text-sm text-black dark:text-white pb-6">
                Send me a message and I'll get back to you as soon as possible.
              </p>
              <form action="https://usebasin.com/f/b1df64d4eaf8" method="POST">
                <Field>
                  <Label className="block text-black dark:text-white">
                    Email
                  </Label>
                  <Input
                    className={clsx(
                      "mt-1 block w-full resize-none rounded-lg  bg-white/5 py-1.5 px-3 text-sm/6 text-black dark:text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 border border-[#e5e7eb] dark:border-none"
                    )}
                    name="email"
                    placeholder="joe@example.com"
                    type="email"
                    id="email"
                  />
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-black dark:text-white">
                    Message
                  </Label>
                  <Textarea
                    className={clsx(
                      "mt-3 block w-full resize-none rounded-lg  bg-white/5 py-1.5 px-3 text-sm/6 text-black dark:text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 border border-[#e5e7eb] dark:border-none"
                    )}
                    rows={4}
                    name="message"
                    placeholder="Message"
                    type="text"
                    id="message"
                  />
                </Field>
                <div className="mt-4">
                  <button
                    className="font-poppins font-normal text-sm text-md bg-transparent rounded-full text-black dark:text-white  hover:cursor-pointer flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      close();
                      e.target.closest("form").submit();
                    }}
                    type="submit"
                  >
                    Send <ArrowUpRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
