"use client";

import Heading from '@/app/_components/UI/Heading';
import Section from '@/app/_components/UI/Section';
import Image from 'next/image';
import PageLayout from '@/app/_components/Layouts/PageLayout';



export default function Print() {
	const heading = ['Print', 'Design'];


	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-red-600 absolute'>
			<Section>
				<div className="col-start-2 mt-24">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/print/print-1.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Breaking Bad Poster" />
				<Image src="/print/print-3.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Animals As Leaders Poster" />
				<Image src="/print/lt-vip-pass.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="LT VIP Pass" />
				<Image src="/print/print-2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="The King's Music Poster" />
			</Section>
		</PageLayout>
	)
}
