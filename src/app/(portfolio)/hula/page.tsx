"use client";

import Heading from '@/app/_components/UI/Heading';
import Section from '@/app/_components/UI/Section';
import Image from 'next/image';
import PageLayout from '@/app/_components/Layouts/PageLayout';
import ColorGrid from '@/app/_components/UI/ColorGrid';
import { anton } from '@/app/styles/fonts';


export default function Hula() {
	const heading = ['Hula', 'Growth'];

	const bgColor = ['bg-[#0a3b5d]', 'bg-slate-900', 'bg-[#e8eeee]', 'bg-[#d7b570]'];
	const textColor = ['text-white', 'text-white', 'text-slate-950', 'text-slate-950'];

	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-yellow-100 absolute'>
			<Section>
				<div className="col-start-2 mt-24">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/hula/hula-intro-card.png" className="w-full col-span-10 col-start-2 shadow-2xl mb-48" width={1400} height={1400} alt="Hula Case Study" />
				<h2 className={`${anton.className} col-start-2 col-span-10 leading-none text-left uppercase`}>My Role</h2>
				<p className="col-start-2 col-span-10  columns-2 mb-48">
					Hula Growth Holdings is a startup cannabis dispensary, differntiating itself by style and the use of emerging web technolog in the ever-evolving cannabis industry. Hula Growth Holdings aims to provide customers with premium cannabis products and an unparalleled shopping experience. In this endeavor, my role as the web designer and web developer was to create a web product to entice seed funding. By leveraging a custom design system on top of Wordpress new page building interface, I crafted a visually stunning and highly functional website for Hula Growth Holdings. My contribution as the web designer and developer has significantly enhanced Hula Growth Holdings online visibility, brand recognition, and customer engagement.
				</p>
				<ColorGrid bgColor={bgColor} textColor={textColor} />
				<Image src="/hula/hula2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={2000} height={2000} alt="Hula Case Study" />
				<Image src="/hula/hula3.jpg" className="col-span-10 col-start-2 shadow-2xl" width={2000} height={2000} alt="testing image" />
				<Image src="/hula/hula-home.jpg" className="col-span-10 col-start-2 shadow-2xl" width={2000} height={2000} alt="testing image" />
			</Section>
		</PageLayout>
	)
}
