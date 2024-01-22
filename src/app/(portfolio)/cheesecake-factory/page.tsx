"use client";

import Heading from '../../_components/UI/Heading';
import Section from '../../_components/UI/Section';
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
			<Section>
				<div className="col-start-2">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/cheesecake-factory/ccf1.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 1" />
				<Image src="/cheesecake-factory/ccf2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 2" />
				<Image src="/cheesecake-factory/ccf3.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 3" />
				<Image src="/cheesecake-factory/ccf4.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 4" />
				<Image src="/cheesecake-factory/ccf5.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 5" />
				<Image src="/cheesecake-factory/ccf6.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 6" />
				<Image src="/cheesecake-factory/ccf7.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 7" />
				<YouTubeEmbed videoid="k3s4xjqp8K0" width={720} height={405} params="controls=0" style='margin: 0 auto' />
				<YouTubeEmbed videoid="pv18YWGs0fQ" width={720} height={405} params="controls=0" style='margin: 0 auto' />
				<YouTubeEmbed videoid="oRfO-PySM6Y" width={720} height={405} params="controls=0" style='margin: 0 auto' />
				<YouTubeEmbed videoid="xRvbS2roVlw" width={720} height={405} params="controls=0" style='margin: 0 auto' />
			</Section>
		</PageLayout>
	)
}
