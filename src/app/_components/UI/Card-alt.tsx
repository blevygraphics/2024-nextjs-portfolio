"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { anton } from '../../styles/fonts';


interface CardProps {
	url: string;
	image: string;
	title: string;
	width: number;
	bgColor: string;
	height: number;
	subtitle: string;
	reverse: boolean;
	description: string;
}

export default function CardAlt({ url, image, title, bgColor, width, height, subtitle, reverse, description }: CardProps) {
	return (
		<>
			<section className="w-full relative">
				<Link href={url} scroll={false}>
					<div className={`grid grid-cols-12 gap-9 mx-9 min-h-screen items-center font-extralight leading-relaxed`}>
						<motion.div
							initial={{ clipPath: 'polygon(0 0, 0 0, 0 101%, 0 101%)' }}
							whileInView={{
								clipPath: 'polygon(0 0, 101% 0, 101% 101%, 0 101%)',
								transition: { duration: .75, ease: [.7, 0, .6, .98] }
							}}
							exit={{ clipPath: 'polygon(0 0, 0 0, 0 101%, 0 101%)' }}
							viewport={{ once: true }}
							className={`${reverse ? 'col-start-8 left-10' : 'col-start-1 right-10'} col-span-3 absolute z-10 h-screen  flex items-center ${bgColor}`}
						>
							<Image src={image} className="m-auto h-auto" width={width} height={height} alt={`${title}`} />
						</motion.div>
						<div className={`${reverse ? 'col-start-7' : 'col-start-2'} col-span-4`}>
							<p className="text-slate-500">{subtitle}</p>
							<hr className="my-9 divide-slate-950" />
							<h2 className={`${anton.className} mb-6 leading-none w-full uppercase`}>{title}</h2>
							<p className='text-slate-700'>{description}</p>
						</div>
					</div>
				</Link>
			</section>
		</>
	);
}

