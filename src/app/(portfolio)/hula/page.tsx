"use client";

import Heading from '../../_components/UI/Heading';
import Section from '../../_components/UI/Section';
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';



export default function Hula() {
	const heading = ['Hula', 'Growth'];


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
				<Image src="/hula/hula-case-study.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Hula Case Study" />
			</Section>
		</PageLayout>
	)
}
