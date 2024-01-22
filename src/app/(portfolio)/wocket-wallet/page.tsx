"use client";

import Heading from '../../_components/UI/Heading';
import Link from 'next/link';
// import { motion } from 'framer-motion'
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';



export default function Wocket() {
	const heading = ['Wocket', 'Wallet'];


	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-orange-400 absolute'>
			<Link prefetch={false} href="/" className="fixed top-1 left-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
					<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</Link>
			<div className="grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<Heading title={heading} />
			</div>
			<Image src="/wocket/wocket1.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="wocket-1" />
			<Image src="/wocket/wocket2.png" className="lg:max-w-7xl" width={1400} height={1400} alt="wocket-2" />
			<Image src="/wocket/wocket3.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="wocket-3" />
			<Image src="/wocket/wocket-wallet-card.gif" className="lg:max-w-7xl" width={1400} height={1400} alt="wocket-3" />
			<Image src="/wocket/wocket4.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="wocket-4" />
			<Image src="/wocket/wocket5.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="wocket-5" />
		</PageLayout>
	)
}