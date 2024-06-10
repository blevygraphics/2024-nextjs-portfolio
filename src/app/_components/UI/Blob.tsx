
import { motion } from 'framer-motion';

interface ChildProps {
  animations: {
    initial: object,
    animate: object,
    exit: object
  },
  bgColor: string
}

export default function Blob({ animations, bgColor }: ChildProps) {

  const variants = {
    initial: animations.initial,
    animate: animations.animate,
    exit: animations.exit
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`t-0 l-0 w-full h-full -z-10 ${bgColor}`}
    />
  );
}