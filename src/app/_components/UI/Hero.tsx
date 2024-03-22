"use client";

import Image from 'next/image';
import SocialIcons from './SocialIcons';
import { motion } from 'framer-motion'
import Heading from './Heading';

export default function Hero() {
  const heading = ['Blaine', 'Levy'];


  const SOCIAL_ICONS = [
    {
      key: 'github',
      src: '/social/github.svg',
      url: 'https://github.com/blevygraphics'
    },
    {
      key: 'linkedin',
      src: '/social/linkedin.svg',
      url: 'https://www.linkedin.com/in/blaine-levy-graphics/'
    },
    {
      key: 'facebook',
      src: '/social/facebook.svg',
      url: 'https://www.facebook.com/blainelevy87'
    },
    {
      key: 'instagram',
      src: '/social/instagram.svg',
      url: 'https://www.instagram.com/selkies87/'
    },
    {
      key: 'x',
      src: '/social/x.svg',
      url: 'https://twitter.com/BLGraphics'
    },
    {
      key: 'behance',
      src: '/social/behance.svg',
      url: 'https://www.behance.net/blainelevygraphics'
    },
    {
      key: 'dribbble',
      src: '/social/dribbble.svg',
      url: 'https://dribbble.com/blainelevygraphics'
    },
  ];

  return (
    <section className="w-full items-stretch">
      <div className="md:grid grid-cols-12 gap-9 mx-9 min-h-screen items-center">
        <div className="col-start-2 col-span-5 items-center">
          <Heading title={heading} />
          <p className="md:text-right tracking-widest font-thin text-lg">UI & UX Design | Full-Stack Developer | Web Manager</p>
        </div>
        <div className="col-start-7 col-span-5">
          <div className="shadow-2xl bg-yellow-300">
            <motion.div
              initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
              whileInView={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                transition: { duration: .75, ease: [.7, 0, .6, .98] }
              }}
              exit={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 3 }}
                animate={{ scale: 1, transition: { duration: 1, ease: [.7, 0, .6, .98] } }}
                exit={{ scale: 3, transition: { duration: 1, ease: [.7, 0, .6, .98] } }}
              >
                <Image src="/clay-profile.jpg" className="w-full" width={1200} height={1200} alt="testing image" />
              </motion.div>
            </motion.div>
          </div>
          <div className="mt-9">
            <SocialIcons icons={SOCIAL_ICONS} />
          </div>
        </div>
      </div>
    </section>
  );
}
