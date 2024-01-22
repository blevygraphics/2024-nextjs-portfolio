"use client";

import Heading from '../../_components/UI/Heading';
import Link from 'next/link';
// import { motion } from 'framer-motion'
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';



export default function ArborMemorial() {
	const heading = ['Arbor', 'Memorial'];


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
			<Image src="/arbor-memorial/arbor1.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 1" />
			<Image src="/arbor-memorial/arbor2.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 2" />
			<Image src="/arbor-memorial/arbor3.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 3" />
			<Image src="/arbor-memorial/arbor4.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 4" />
			<Image src="/arbor-memorial/arbor5.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 5" />
			<Image src="/arbor-memorial/arbor6.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 6" />
			<Image src="/arbor-memorial/arbor7.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 7" />
			<Image src="/arbor-memorial/arbor8.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 8" />
			<Image src="/arbor-memorial/arbor9.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 9" />
			<Image src="/arbor-memorial/arbor10.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 10" />
			<Image src="/arbor-memorial/arbor11.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Arbor Memorial 11" />
		</PageLayout>
	)
}
