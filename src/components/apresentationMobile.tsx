"use client";

import { motion } from "framer-motion";

export default function ApresentationMobile() {
  return (
    <section className="w-[300px] mr-4">
      <motion.div className="flex w-full mx-auto relative items-center justify-center">
        <motion.h1
          initial={{ rotate: 45, position: "relative", left: 9 }}
          animate={{ scale: 1, rotate: 0, left: -107 }}
          transition={{ duration: 1 }}
          className="text-[#3CE37C] text-[50px]"
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, position: "absolute", display: "none" }}
          animate={{ opacity: 1, display: "block", left: 44 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#fff] text-[50px]"
        >
          ucas
        </motion.h1>

        <motion.h1
          initial={{
            rotate: -135,
            position: "relative",
            left: -9,
          }}
          animate={{ scale: 1, rotate: 0, left: 20 }}
          transition={{ duration: 1 }}
          className="text-[#3CE37C] text-[50px]"
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, position: "absolute", display: "none" }}
          animate={{ opacity: 1, display: "block", left: 193 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#fff] text-[50px]"
        >
          ima
        </motion.h1>
      </motion.div>
    </section>
  );
}
