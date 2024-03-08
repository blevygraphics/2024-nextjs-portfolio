"use client";

import Image from "next/image"
import { motion } from "framer-motion"

interface SocialIconsProps {
	icons: {
		key: string;
		src: string;
		url: string;
	}[];
}


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

export default function SocialIcons({ icons }: SocialIconsProps) {
	return (
		<motion.div layout
			variants={staggerIcons}
			initial='hidden'
			animate='show' className="flex flex-row justify-between items-center overflow-hidden">
			{[...icons].map((icon) => (
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