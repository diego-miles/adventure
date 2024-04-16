"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Science and technology {" "}
        <Highlight className="text-black dark:text-white">
           accesible to everyone.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
