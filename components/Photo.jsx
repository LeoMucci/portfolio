"use client";
import { motion, reverseEasing } from "framer-motion";

import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/poyoto.png"
            priority
            quality={100}
            fill
            alt=""
            className="object=contain"
          />
        </motion.div>

        <motion.svg
    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
>
<motion.circle
        cx="253"
        cy="253"
        r="250"
        stroke="#014ba0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          strokeDasharray: "24 10 0 0",
          stroke: "#014ba0",
        }}
        animate={{
          strokeDasharray: ["15 120 25 25", "1 25 92 72", "4 250 10 22"],
          stroke: ["#014ba0"],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
