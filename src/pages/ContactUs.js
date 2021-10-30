import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animation/animation";

export const ContactUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <h1>Contact us</h1>
    </motion.div>
  );
};
