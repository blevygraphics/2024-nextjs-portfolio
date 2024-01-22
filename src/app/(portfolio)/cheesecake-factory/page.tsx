"use client";

import Heading from '../../_components/UI/Heading';
import Link from 'next/link';
// import { motion } from 'framer-motion'
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';
import { YouTubeEmbed } from '@next/third-parties/google';



export default function CheesecakeFactory() {
	const heading = ['Cheesecake', 'Factory'];


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
			<Image src="/cheesecake-factory/ccf1.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Cheesecake factory 1" />
			<Image src="/cheesecake-factory/ccf2.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Cheesecake factory 2" />
			<Image src="/cheesecake-factory/ccf3.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Cheesecake factory 3" />
			<Image src="/cheesecake-factory/ccf4.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Cheesecake factory 4" />
			<Image src="/cheesecake-factory/ccf5.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Cheesecake factory 5" />
			<Image src="/cheesecake-factory/ccf6.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Cheesecake factory 6" />
			<Image src="/cheesecake-factory/ccf7.jpg" className="lg:max-w-7xl" width={1400} height={1400} alt="Cheesecake factory 7" />
			<YouTubeEmbed videoid="k3s4xjqp8K0" width={720} height={405} params="controls=0" style='margin: 0 auto' />
			<YouTubeEmbed videoid="pv18YWGs0fQ" width={720} height={405} params="controls=0" style='margin: 0 auto' />
			<YouTubeEmbed videoid="oRfO-PySM6Y" width={720} height={405} params="controls=0" style='margin: 0 auto' />
			<YouTubeEmbed videoid="xRvbS2roVlw" width={720} height={405} params="controls=0" style='margin: 0 auto' />
		</PageLayout>
	)
}
