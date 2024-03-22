"use client";

import { anton } from '../../styles/fonts';
import SocialIcons from './SocialIcons';

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

export default function Footer() {
  return (
    <footer className="w-full items-stretch bg-slate-950 text-white">
      <div className="grid grid-cols-12 gap-9 mx-9 lg:min-h-screen items-center">
        <h2 className={`col-start-2 col-span-9 ${anton.className} mb-6 leading-none uppercase`}>Follow Me</h2>
        <div className="col-start-2 col-span-5 invert-[100%]  hue-rotate-[334deg] brightness-[0%] contrast=[113%]">
          <SocialIcons icons={SOCIAL_ICONS} />
        </div>
        <p className="col-start-2 col-span-9">©2024 | Blaine Levy</p>
      </div>
    </footer>
  )

}