import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollBar() {

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="fixed top-14 left-6 h-[75%] w-1 bg-slate-950 origin-top-left z-[49]" style={{ scaleY }} />
      <div className="fixed -left-9 bottom-24 -rotate-90 z-40">
        <p className="font-thin leading-none"><span className="text-slate-500 p-4">01</span> Welcome</p>
      </div>
    </>
  );

}