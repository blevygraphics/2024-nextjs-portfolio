"use client";

import { motion } from 'framer-motion';
import { anton } from '../../styles/fonts';

export default function Heading({ title }: { title: string[] }) {

  const firstWord = title[0];
  const lastWord = title[1];

  const staggerVariant = {
    show: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      }
    },
    exit: { y: 0 }
  }

  const letterAni = {
    hidden: { y: 400 },
    show: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      }
    },
    exit: { y: 0 }
  };

  return (
    <>
      <h1 className={`${anton.className}`}>
        <span className='inline-flex relative overflow-hidden'>
          <motion.span
            layout
            variants={staggerVariant}
            initial='hidden'
            animate='show'
            exit='exit'
            className='inline-flex relative'
          >
            {[...firstWord].map((letter, i) => (
              <motion.span
                layout
                key={i} // Add a unique "key" prop
                className='inline-flex relative'
                variants={letterAni}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </span>

        <span className='inline-flex overflow-hidden'>
          <motion.span
            layout
            variants={staggerVariant}
            initial='hidden'
            animate='show'
            className='inline-flex relative'
          >
            {[...lastWord].map((letter, i) => (
              <motion.span
                layout
                key={i} // Add a unique "key" prop
                className='inline-flex relative'
                variants={letterAni}>
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </span>
      </h1>
    </>
  )
}