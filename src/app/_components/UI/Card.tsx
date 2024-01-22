"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { anton } from '../../styles/fonts';


interface CardProps {
	url: string;
	image: string;
	bgColor: string;
	title: string;
	width: number;
	height: number;
	subtitle: string;
	reverse: boolean;
}

export default function Card({ url, image, bgColor, title, width, height, subtitle, reverse }: CardProps) {
	return (
		<>
			<section className="lg:max-w-7xl lg:w-full min-h-screen mt-12 mb-12 border-black border-">
				<Link href={url} scroll={false}>
					<motion.div className={`lg:flex align-middle items-center min-h-screen ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1
						}}
						exit={{ opacity: 0 }}
						viewport={{ once: true }}
					>
						<motion.div
							initial={{ clipPath: 'polygon(0 0, 0 0, 0 101%, 0 101%)' }}
							whileInView={{
								clipPath: 'polygon(0 0, 101% 0, 101% 101%, 0 101%)',
								transition: { duration: .75, ease: [.7, 0, .6, .98] }
							}}
							exit={{ clipPath: 'polygon(0 0, 0 0, 0 101%, 0 101%)' }}
							className={`w-full grid min-h-screen ${bgColor}`}
						>
							<Image src={image} className="m-auto" width={width} height={height} alt={`${title}`} />
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 200 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: { duration: 1, ease: [.7, 0, .6, .98] }
							}}
							exit={{ opacity: 0, y: 200 }}
							className="p-9"
						>
							<h2 className={`${anton.className}  mb-6 leading-none max-w-7xl w-full uppercase`}>{title}</h2>
							<p className={`text-5xl font-light ${reverse ? 'text-right' : 'text-left'}`}>{subtitle}</p>
						</motion.div>
					</motion.div>
				</Link>
			</section>
		</>
	);
}

