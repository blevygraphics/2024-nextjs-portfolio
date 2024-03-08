"use client";

import Heading from '@/app/_components/UI/Heading';
import Section from '@/app/_components/UI/Section';
import Image from 'next/image';
import PageLayout from '@/app/_components/Layouts/PageLayout';
import { YouTubeEmbed } from '@next/third-parties/google';
import { anton } from '@/app/styles/fonts';
import ColorGrid from '@/app/_components/UI/ColorGrid';



export default function CheesecakeFactory() {
	const heading = ['Cheesecake', 'Factory'];

	const bgColor = ['bg-[#90005a]', 'bg-[#4c4c4c]', 'bg-white', 'bg-[#CBAE76]'];
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
				<Image src="/cheesecake-factory/ccf-title-card.png" className="w-full col-span-10 col-start-2 shadow-2xl mb-24" width={1400} height={1400} alt="Cheesecake factory 1" />
				{/* <h2 className={`${anton.className} col-start-2 col-span-10 leading-none text-left uppercase`}>About</h2>
				<p className="col-start-2 col-span-10  columns-2 mb-24">
					This project aims to help businesses achieve their goals by providing a comprehensive annuity solution. By leveraging advanced technologies and innovative design, the project offers a user-friendly platform for managing annuity investments. With features such as customizable investment plans, real-time analytics, and secure transactions, businesses can optimize their annuity strategies and maximize returns. Additionally, the project focuses on delivering a seamless user experience, ensuring that businesses can easily navigate and utilize the platform to achieve their financial objectives. By implementing this project, businesses can streamline their annuity management processes, enhance decision-making capabilities, and ultimately drive growth and success.
				</p> */}
				<ColorGrid bgColor={bgColor} textColor={textColor} />
				<Image src="/cheesecake-factory/ccf-phone.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 1" />
				<div className='col-start-2 col-span-4'>
					<YouTubeEmbed videoid="k3s4xjqp8K0" width={720} height={405} params="controls=0" style='margin: 0 auto' />
				</div>
				<div className='col-start-7 col-span-4'>
					<YouTubeEmbed videoid="pv18YWGs0fQ" width={720} height={405} params="controls=0" style='margin: 0 auto' />
				</div>
				<div className='col-start-2 col-span-4'>
					<YouTubeEmbed videoid="oRfO-PySM6Y" width={720} height={405} params="controls=0" style='margin: 0 auto' />
				</div>
				<div className='col-start-7 col-span-4'>
					<YouTubeEmbed videoid="xRvbS2roVlw" width={720} height={405} params="controls=0" style='margin: 0 auto' />
				</div>
				<Image src="/cheesecake-factory/ccf-case-study.jpg" className="w-full col-span-8 col-start-3 shadow-2xl" width={1400} height={1400} alt="Cheesecake factory 3" />
			</Section>
		</PageLayout>
	)
}
