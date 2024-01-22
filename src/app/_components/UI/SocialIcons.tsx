"use client";

import Image from "next/image"
import { motion } from "framer-motion"

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

const staggerIcons = {
	show: {
		y: 0,
		transition: {
			delayChildren: 0.75,
			staggerChildren: 0.1,
		}
	}
}

const iconsAni = {
	hidden: { y: 400 },
	show: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		}
	}
};

export default function SocialIcons() {
	return (
		<motion.div layout
			variants={staggerIcons}
			initial='hidden'
			animate='show' className="flex flex-row justify-between items-center overflow-hidden">
			{[...SOCIAL_ICONS].map((icon) => (
				<motion.a
					layout
					key={icon.key} // Add a unique "key" prop
					className='inline-flex relative'
					variants={iconsAni}
					href={icon.url} target="_blank">
					<Image src={icon.src} className="w-8 h-8" width={36} height={36} alt={icon.key} />
				</motion.a>
			))}
		</motion.div>
	)
}