"use client";

import Heading from '@/app/_components/UI/Heading';
import Image from 'next/image';
import Section from '@/app/_components/UI/Section';
import PageLayout from '@/app/_components/Layouts/PageLayout';
import { anton } from '@/app/styles/fonts';
import ColorGrid from '@/app/_components/UI/ColorGrid';



export default function ArborMemorial() {
	const heading = ['Arbor', 'Memorial'];

	const bgColor = ['bg-[#ddd7c0]', 'bg-[#3e3523]', 'bg-white', 'bg-[#ce7700]'];
	const textColor = ['text-slate-950', 'text-white', 'text-slate-950', 'text-slate-950'];

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
				<Image src="/arbor-memorial/arbor5.jpg" className="w-full col-span-10 col-start-2 mb-24 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 1" />
				{/* <h2 className={`${anton.className} col-start-2 col-span-10 leading-none text-left uppercase`}>My Role</h2>
				<p className="col-start-2 col-span-10  columns-2 mb-24">
					This project aims to help businesses achieve their goals by providing a comprehensive annuity solution. By leveraging advanced technologies and innovative design, the project offers a user-friendly platform for managing annuity investments. With features such as customizable investment plans, real-time analytics, and secure transactions, businesses can optimize their annuity strategies and maximize returns. Additionally, the project focuses on delivering a seamless user experience, ensuring that businesses can easily navigate and utilize the platform to achieve their financial objectives. By implementing this project, businesses can streamline their annuity management processes, enhance decision-making capabilities, and ultimately drive growth and success.
				</p> */}
				<ColorGrid bgColor={bgColor} textColor={textColor} />
				<Image src='/arbor-memorial/arbor-case-study.jpg' className="w-full col-span-8 col-start-3 shadow-2xl" width={1400} height={1400} alt="Arbor Memorial 2" />
			</Section>
		</PageLayout>
	)
}
