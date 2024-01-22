"use client";

import Heading from '../../_components/UI/Heading';
import Link from 'next/link';
// import { motion } from 'framer-motion'
import Image from 'next/image';
import PageLayout from '../../_components/Layouts/PageLayout';
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
			<Link prefetch={false} href="/" className="fixed top-1 left-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
					<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</Link>
			<section className="w-full">
				<div className="grid grid-cols-12 gap-9 mx-9 items-center">
					<div className="col-start-2">
						<Heading title={heading} />
					</div>
				</div>
			</section>
			<section className="w-full">
				<div className="grid grid-cols-12 gap-9 mx-9 items-center">
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
				</div>
			</section>
		</PageLayout>
	)
}
