import React from "react";
import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { ServicesSection } from "../components/ServicesSection";
// Animations
import { motion } from "framer-motion";
import { pageAnim } from "../animation/animation";
import { ScrollTop } from "../components/ScrollTop";

export const AboutUs = () => {
  return (
    <>
      <motion.div
        exit="exit"
        variants={pageAnim}
        initial="hidden"
        animate="show"
      >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ScrollTop />
      </motion.div>
    </>
  );
};
