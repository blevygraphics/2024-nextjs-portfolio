"use client";

import Heading from '@/app/_components/UI/Heading';
import Section from '@/app/_components/UI/Section';
import Image from 'next/image';
import PageLayout from '@/app/_components/Layouts/PageLayout';
import ColorGrid from '@/app/_components/UI/ColorGrid';
import { anton } from '@/app/styles/fonts';

export default function Annuity() {
	const heading = ['Trigo', 'Corp'];

	const bgColor = ['bg-[#e9bd1c]', 'bg-[#353535]', 'bg-[#f4f4f4]', 'bg-[#3c53a4]'];
	const textColor = ['text-slate-950', 'text-white', 'text-slate-950', 'text-white'];

	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-yellow-400 absolute'>
			<Section>
				<div className="col-start-2 mt-24">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/trigo/trigo1.jpg" className="w-full col-span-10 col-start-2 mb-24 shadow-2xl" width={1400} height={1400} alt="trigo1" />
				<h2 className={`${anton.className} col-start-2 col-span-10 leading-none text-left uppercase`}>My Role</h2>
				<p className="col-start-2 col-span-10  columns-2 mb-24">
					This project aims to help businesses achieve their goals by providing a comprehensive annuity solution. By leveraging advanced technologies and innovative design, the project offers a user-friendly platform for managing annuity investments. With features such as customizable investment plans, real-time analytics, and secure transactions, businesses can optimize their annuity strategies and maximize returns. Additionally, the project focuses on delivering a seamless user experience, ensuring that businesses can easily navigate and utilize the platform to achieve their financial objectives. By implementing this project, businesses can streamline their annuity management processes, enhance decision-making capabilities, and ultimately drive growth and success.
				</p>
				<ColorGrid bgColor={bgColor} textColor={textColor} />
				<Image src="/trigo/trigo2.jpg" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="trigo2" />
				<Image src="/trigo/trigo-case-study.jpg" className="w-full col-span-8 col-start-3 shadow-2xl" width={1400} height={1400} alt="trigo2" />
			</Section>
		</PageLayout>
	)
}
