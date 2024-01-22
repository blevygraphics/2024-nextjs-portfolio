"use client";

import Heading from '../../_components/UI/Heading';
import Link from 'next/link';
// import { motion } from 'framer-motion'
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';

export default function Annuity() {
	const heading = ['Trigo', 'Corp'];

	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-blue-100 absolute'>
			<Link prefetch={false} href="/" className="fixed top-1 left-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
					<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</Link>
			<div className="grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<Heading title={heading} />
			</div>
			<Image src="/trigo/trigo1.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo1" />
			<Image src="/trigo/trigo2.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo2" />
			<Image src="/trigo/trigo3.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo3" />
			<Image src="/trigo/trigo4.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo4" />
			<Image src="/trigo/trigo5.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo5" />
			<Image src="/trigo/trigo6.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo6" />
			<Image src="/trigo/trigo7.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo7" />
			<Image src="/trigo/trigo8.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="trigo8" />
		</PageLayout>
	)
}
