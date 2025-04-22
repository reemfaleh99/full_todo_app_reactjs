import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const checkVariants = {
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

const boxVariants = {
  checked: {
    backgroundColor: "#ef4444",
    transition: { duration: 0.2 },
  },
  unchecked: {
    backgroundColor: "#6b7280",
    transition: { duration: 0.2 },
  },
};

const Checkbox = ({ checked, handleCheck }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      variants={boxVariants}
      animate={checked ? "checked" : "unchecked"}
      onClick={handleCheck}
      className="basis-[25px] h-[25px] rounded-sm flex items-center justify-center p-2 cursor-pointer duration-300 hover:bg-gray-400"
    >
      <motion.svg
        className="w-full h-full stroke-white"
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? "checked" : "unchecked"}
          style={{ pathLength, opacity }}
          fill="none"
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};

export default Checkbox;
