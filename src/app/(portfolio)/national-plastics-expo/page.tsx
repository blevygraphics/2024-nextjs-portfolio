"use client";

import Heading from '../../_components/UI/Heading';
import Section from '../../_components/UI/Section';
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
			<Section>
				<div className="col-start-2">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/npe/npe1.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 1" />
				<Image src="/npe/npe2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 2" />
				<Image src="/npe/npe3.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 3" />
				<Image src="/npe/npe4.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 4" />
				<Image src="/npe/npe5.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 5" />
				<Image src="/npe/npe6.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 6" />
				<Image src="/npe/npe7.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 7" />
				<Image src="/npe/npe8.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 8" />
				<Image src="/npe/npe9.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 9" />
				<Image src="/npe/npe10.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="National Plastics Expo 10" />
			</Section>
		</PageLayout>
	)
}
