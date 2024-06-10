"use client";

import Heading from '@/app/_components/UI/Heading';
import Section from '@/app/_components/UI/Section';
import Image from 'next/image';
import PageLayout from '@/app/_components/Layouts/PageLayout';
import { anton } from '@/app/styles/fonts';
import ColorGrid from '@/app/_components/UI/ColorGrid';
import SocialIcons from '@/app/_components/UI/SocialIcons';



export default function Asbestos() {
	const heading = ['Asbestos', '.com'];

	const bgColor = ['bg-[#1871C3]', 'bg-[#0D1020]', 'bg-[#edf4fa]', 'bg-[#fda20b]'];
	const textColor = ['text-white', 'text-white', 'text-slate-950', 'text-slate-950'];


	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	const SOCIAL_ICONS = [
		{
			key: 'figma',
			src: '/social/figma.svg',
			url: 'https://github.com/blevygraphics'
		},
		{
			key: 'adobe-cc',
			src: '/social/adobe-cc.svg',
			url: 'https://twitter.com/BLGraphics'
		},
		{
			key: 'wordpress',
			src: '/social/wordpress.svg',
			url: 'https://www.linkedin.com/in/blaine-levy-graphics/'
		},
		{
			key: 'mysql',
			src: '/social/mysql.svg',
			url: 'https://www.facebook.com/blainelevy87'
		},
		{
			key: 'php',
			src: '/social/php.svg',
			url: 'https://www.instagram.com/selkies87/'
		},
		{
			key: 'html5',
			src: '/social/html5.svg',
			url: 'https://www.behance.net/blainelevygraphics'
		},
		{
			key: 'css3',
			src: '/social/css3.svg',
			url: 'https://dribbble.com/blainelevygraphics'
		},
		{
			key: 'javascript',
			src: '/social/javascript.svg',
			url: 'https://dribbble.com/blainelevygraphics'
		},
	];

	return (
		<PageLayout animations={variants} bgColor='bg-blue-100 absolute'>
			<Section>
				<div className="col-start-2 col-span-4 mt-24">
					<Heading title={heading} />
				</div>
				<div className='col-start-2 col-span-6 mb-9'>
					<SocialIcons icons={SOCIAL_ICONS} />
				</div>
			</Section>
			<Section>
				<Image src="/asbestos/asbestos-title-card.png" className="w-full col-span-10 col-start-2 mb-24 shadow-2xl" width={1400} height={1400} alt="testing image" />
			</Section>
			<Section>
				<div className="col-span-10 col-start-2 border-b-2 border-slate-200 grid grid-cols-2 grid-flow-row pb-8">
					<p className="text-slate-500 uppercase">Client</p>
					<p>Launch That</p>
				</div>
				<div className="col-span-10 col-start-2 border-b-2 border-slate-200 grid grid-cols-2 grid-flow-row pb-8">
					<p className="text-slate-500 uppercase">Year</p>
					<p>2022</p>
				</div>
				<div className="col-span-10 col-start-2 border-b-2 border-slate-200 grid grid-cols-2 grid-flow-row pb-8">
					<p className="text-slate-500 uppercase">Serivce</p>
					<p>Launch That</p>
				</div>
				<div className="col-span-10 col-start-2 border-b-2 border-slate-200 grid grid-cols-2 grid-flow-row pb-8">
					<p className="text-slate-500 uppercase">Platform</p>
					<p>Launch That</p>
				</div>
				<div className="col-span-10 col-start-2 border-b-2 border-slate-200 grid grid-cols-2 grid-flow-row pb-8">
					<p className="text-slate-500 uppercase">Challenges</p>
					<p>Overcoming challenges of an outdated website, poor user engagement, and limited brand visibility, the strategy and website design intervention for an interior college focused on revamping its online presence, improving program communication, and streamlining information architecture.</p>
				</div>
				<div className="col-span-10 col-start-2 border-b-2 border-slate-200 grid grid-cols-2 grid-flow-row pb-8 mb-24">
					<p className="text-slate-500 uppercase">Solutions</p>
					<p>Implementing a comprehensive redesign, introducing interactive elements, and restructuring information architecture successfully addressed the challenges, resulting in a revitalized online presence, enhanced user engagement, and improved communication for an interior college. Additionally, strategic content planning and targeted digital marketing efforts increased brand visibility and interest in the college&apos;s programs.</p>
				</div>
			</Section>
			<Section>
				<ColorGrid bgColor={bgColor} textColor={textColor} />
				<Image src="/asbestos/asbestos-1.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="testing image" />
				<Image src="/asbestos/asbestos-2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="testing image" />
				<h2 className={`${anton.className} col-start-2 col-span-10 text-center`}>2019 vs. 2022</h2>
				<Image src="/asbestos/asb-2019.jpg" className="col-span-6 shadow-2xl" width={1400} height={1400} alt="testing image" />
				<Image src="/asbestos/asb-2022.jpg" className="col-span-6 shadow-2xl" width={1400} height={1400} alt="testing image" />
			</Section>
		</PageLayout>
	)
}
