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
import Github from "./icons/github";
import Message from "./icons/message";
import Bulb from "./icons/bulb";

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
        transition={{ duration: 1, delay: 1.5 }}
        className="flex flex-col justify-start pb-10 items-start z-20 relative"
      >
        <h2 className="font-poppins font-normal text-5xl text-black dark:text-white text-left pb-4">
          {" "}
          Creating awesome user interfaces
        </h2>
        <p className="font-poppins font-normal text-sm text-black dark:text-white max-w-md text-left">
          Hey there! 👋 I'm a software engineer from Birmingham, UK who loves
          crafting delightful web experiences that people enjoy using. These
          days, I'm leading the frontend team at Lovall, where I get to build
          cool things every day.
        </p>

        <a href="https://github.com/joeparkes" class="pt-[24px]">
          <Github />
        </a>

        {/* <div className="flex-row gap-3 justify-start items-center pt-6 pb-6 flex">
          <button className="relative font-poppins font-normal text-sm text-md bg-transparent rounded-full px-4 py-2 text-black dark:text-white  hover:cursor-pointer flex items-center gap-2 whitespace-nowrap before:absolute before:top-full before:right-0 before:left-auto before:w-full before:h-[1px] before:bg-current before:pointer-events-none before:content-[''] hover:before:animate-underline">
            <Github />
          </button>
          <button
            className="relative font-poppins font-normal text-sm text-md bg-transparent rounded-full px-4 py-2 text-black dark:text-white  hover:cursor-pointer flex items-center gap-2 whitespace-nowrap before:absolute before:top-full before:right-0 before:left-auto before:w-full before:h-[1px] before:bg-current before:pointer-events-none before:content-[''] hover:before:animate-underline"
            onClick={open}
          >
            <Message />
          </button>
          <button
            className="relative font-poppins font-normal text-sm text-md bg-transparent rounded-full px-4 py-2 text-black dark:text-white  hover:cursor-pointer flex items-center gap-2 whitespace-nowrap before:absolute before:top-full before:right-0 before:left-auto before:w-full before:h-[1px] before:bg-current before:pointer-events-none before:content-[''] hover:before:animate-underline"
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
          >
            {" "}
            <Bulb />
          </button>
        </div> */}
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
                    Send
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
