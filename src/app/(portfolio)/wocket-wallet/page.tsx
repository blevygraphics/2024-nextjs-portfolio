"use client";

import Heading from '../../_components/UI/Heading';
import Section from '../../_components/UI/Section';
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
			<Section>
				<div className="col-start-2">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/wocket/wocket1.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="wocket-1" />
				<Image src="/wocket/wocket2.png" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="wocket-2" />
				<Image src="/wocket/wocket3.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="wocket-3" />
				<Image src="/wocket/wocket-wallet-card.gif" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="wocket-3" />
				<Image src="/wocket/wocket4.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="wocket-4" />
				<Image src="/wocket/wocket5.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="wocket-5" />
			</Section>
		</PageLayout>
	)
}
