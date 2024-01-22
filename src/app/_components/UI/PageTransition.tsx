"use client";

import { motion, useIsPresent } from "framer-motion";

export default function PageTransition() {
  const isPresent = useIsPresent();

  return (
    <>
      <motion.div
        initial={{
          scaleX: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
        animate={{ scaleX: 0, transition: { duration: .75, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: .75, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed t-0 l-0 w-full h-full bg-yellow-300 z-50"
        onAnimationComplete={() => window.scrollTo(0, 0)}
      />
      <motion.div
        initial={{
          scaleX: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
        animate={{ scaleX: -1, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed t-0 l-0 w-full h-full bg-slate-950 z-50"
        onAnimationComplete={() => window.scrollTo(0, 0)}
      />
    </>
  );
}