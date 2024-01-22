"use client";

import Heading from '../../_components/UI/Heading';
import Link from 'next/link';
// import { motion } from 'framer-motion'
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';



export default function NPE() {
	const heading = ['NPE', '2018'];


	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-yellow-100 absolute'>
			<Link prefetch={false} href="/" className="fixed top-1 left-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
					<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</Link>
			<div className="grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<Heading title={heading} />
			</div>
			<Image src="/npe/npe1.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 1" />
			<Image src="/npe/npe2.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 2" />
			<Image src="/npe/npe3.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 3" />
			<Image src="/npe/npe4.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 4" />
			<Image src="/npe/npe5.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 5" />
			<Image src="/npe/npe6.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 6" />
			<Image src="/npe/npe7.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 7" />
			<Image src="/npe/npe8.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 8" />
			<Image src="/npe/npe9.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 9" />
			<Image src="/npe/npe10.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="National Plastics Expo 10" />
		</PageLayout>
	)
}
