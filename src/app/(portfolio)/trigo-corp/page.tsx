"use client";

import Heading from '../../_components/UI/Heading';
import Section from '../../_components/UI/Section';
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
			<Section>
				<div className="col-start-2">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/trigo/trigo1.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo1" />
				<Image src="/trigo/trigo2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo2" />
				<Image src="/trigo/trigo3.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo3" />
				<Image src="/trigo/trigo4.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo4" />
				<Image src="/trigo/trigo5.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo5" />
				<Image src="/trigo/trigo6.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo6" />
				<Image src="/trigo/trigo7.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo7" />
				<Image src="/trigo/trigo8.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo8" />
			</Section>
		</PageLayout>
	)
}
