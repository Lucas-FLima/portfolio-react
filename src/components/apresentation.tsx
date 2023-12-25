"use client";

import { motion } from "framer-motion";

export default function Apresentation() {
  return (
    <section className="w-full ml-4">
      <motion.div className="flex relative items-center justify-center">
        <motion.h1
          initial={{ rotate: 45, position: "relative", left: 23.5 }}
          animate={{ scale: 1, rotate: 0, left: -300 }}
          transition={{ duration: 1 }}
          className="text-[#3CE37C] text-[130px]"
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, position: "absolute", display: "none" }}
          animate={{ opacity: 1, display: "block", left: -245 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#fff] text-[130px]"
        >
          ucas
        </motion.h1>

        <motion.h1
          initial={{
            rotate: -135,
            position: "relative",
            left: -23.5,
          }}
          animate={{ scale: 1, rotate: 0, left: 20 }}
          transition={{ duration: 1 }}
          className="text-[#3CE37C] text-[130px]"
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, position: "absolute", display: "none" }}
          animate={{ opacity: 1, display: "block", left: 135 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-[#fff] text-[130px]"
        >
          ima
        </motion.h1>
      </motion.div>
    </section>
  );
}
