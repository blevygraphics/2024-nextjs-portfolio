"use client";

import Heading from '../../_components/UI/Heading';
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';
import Section from '../../_components/UI/Section';
import { anton } from '../../styles/fonts';



export default function Annuity() {
	const heading = ['Annuity', '.org'];


	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-green-400 absolute'>
			<Section>
				<div className="col-start-2 mt-36">
					<Heading title={heading} />
				</div>
			</Section>
			<Section>
				<Image src="/annuity/annuity-title-card.png" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="testing image" />
				<p className={`col-start-2 col-span-10 text-7xl font-extralight leading-relaxed text-right`}>Creative Direction • UI / UX • Front-End Development • Project Management</p>
				<h2 className={`${anton.className} col-start-2 col-span-10  mb-12 leading-none text-left`}>Notable KPIs</h2>
				<p className="col-start-2 col-span-10  columns-2 mb-96">
					This project aims to help businesses achieve their goals by providing a comprehensive annuity solution. By leveraging advanced technologies and innovative design, the project offers a user-friendly platform for managing annuity investments. With features such as customizable investment plans, real-time analytics, and secure transactions, businesses can optimize their annuity strategies and maximize returns. Additionally, the project focuses on delivering a seamless user experience, ensuring that businesses can easily navigate and utilize the platform to achieve their financial objectives. By implementing this project, businesses can streamline their annuity management processes, enhance decision-making capabilities, and ultimately drive growth and success.
				</p>
				<h2 className={`${anton.className} col-start-2 col-span-10 text-center`}>2020 vs. 2023</h2>
				<Image src="/annuity/annuity-2020-mockup.jpg" className="col-span-6 shadow-2xl" width={1400} height={1400} alt="testing image" />
				<Image src="/annuity/annuity-2023-mockup.jpg" className="col-span-6 shadow-2xl" width={1400} height={1400} alt="testing image" />
				<h2 className={`${anton.className} col-start-2 col-span-10 `}>Design System</h2>
				<Image src="/annuity/annuity-2023-design-system.jpg" className="col-start-2 col-span-10 " width={2000} height={1400} alt="testing image" />
				<h2 className={`${anton.className}`}>Mockups</h2>
				<Image src="/annuity/annuity-2023-laptop.jpg" className="col-start-2 col-span-10 " width={2000} height={1400} alt="testing image" />
				<Image src="/annuity/annuity-2023-backpage.jpg" className="col-start-2 col-span-10 " width={2000} height={1400} alt="testing image" />
			</Section>
		</PageLayout>
	)
}
