"use client";

import Heading from '../../_components/UI/Heading';
import Image from 'next/image';
import Section from '../../_components/UI/Section';
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
			<Section>
				<div className="col-start-2">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/arbor-memorial/arbor1.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 1" />
				<Image src="/arbor-memorial/arbor2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 2" />
				<Image src="/arbor-memorial/arbor3.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 3" />
				<Image src="/arbor-memorial/arbor4.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 4" />
				<Image src="/arbor-memorial/arbor5.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 5" />
				<Image src="/arbor-memorial/arbor6.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 6" />
				<Image src="/arbor-memorial/arbor7.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 7" />
				<Image src="/arbor-memorial/arbor8.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 8" />
				<Image src="/arbor-memorial/arbor9.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 9" />
				<Image src="/arbor-memorial/arbor10.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 10" />
				<Image src="/arbor-memorial/arbor11.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 11" />
			</Section>
		</PageLayout>
	)
}
