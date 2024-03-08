"use client";

import CardAlt from './_components/UI/Card-alt';
import Hero from './_components/UI/Hero';
import PageLayout from './_components/Layouts/PageLayout';
import { anton } from './styles/fonts';
// import Image from 'next/image';

const CARDS = [

	{
		image: "/asbestos/asbestos-card.jpg",
		url: "asbestos",
		bgColor: "bg-blue-900",
		title: "Asbestos",
		width: 500,
		height: 900,
		subtitle: "Creative Direction / UX ",
		description: "Asbestos.com is a comprehensive web resource that provides information about asbestos exposure and mesothelioma."
	},
	{
		image: "/annuity/annuity-card.png",
		url: "annuity",
		bgColor: "bg-green-400",
		title: "Annuity",
		width: 500,
		height: 900,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Annuity.org is a free, comprehensive web resource designed to answer all your questions about annuities and structured settlements."
	},
	{
		image: "/wocket/wocket-wallet-card.gif",
		url: "wocket-wallet",
		bgColor: "bg-orange-400",
		title: "Wocket Wallet",
		width: 500,
		height: 400,
		subtitle: "UX / Front-End Development",
		description: "Wocket Wallet is a smart wallet that securely stores all of your credit, debit, loyalty, and gift cards in one place. It also has a built-in camera to take pictures of your cards and a display to show you which card you are using."
	},
	{
		image: "/hula/hula-card.jpg",
		url: "hula",
		bgColor: "bg-yellow-200",
		title: "Hula Growth Holdings",
		width: 500,
		height: 900,
		subtitle: "UX / Front-End Development",
		description: "Hula Growth Holdings is a private equity firm that invests in and acquires companies in the consumer packaged goods industry."
	},
	{
		image: "/cheesecake-factory/cheesecake-card.jpg",
		url: "cheesecake-factory",
		bgColor: "bg-pink-600",
		title: "Cheesecake Factory",
		width: 500,
		height: 900,
		subtitle: "UX / Hi-Fidelity Prototyping",
		description: "The Cheesecake Factory is a restaurant chain that specializes in cheesecakes and other desserts."
	},
	{
		image: "/npe/npe-card.jpg",
		url: "national-plastics-expo",
		bgColor: "bg-blue-600",
		title: "NPE 2018",
		width: 500,
		height: 900,
		subtitle: "UX / Hi-Fidelity Prototyping",
		description: "The National Plastics Expo is an annual trade show for the plastics industry."
	},
	{
		image: "/arbor-memorial/arbor-memorial-card.jpg",
		url: "arbor-memorial",
		bgColor: "bg-lime-50",
		title: "Arbor Memorial",
		width: 500,
		height: 900,
		subtitle: "UX / Hi-Fidelity Prototyping",
		description: "Arbor Memorial is a leading provider of funeral, cremation, and cemetery services in Canada."
	},
	{
		image: "/tipjar/tipjar-card.png",
		url: "tipjar",
		bgColor: "bg-yellow-300",
		title: "TipJar",
		width: 500,
		height: 900,
		subtitle: "UX / UI / Facilitation",
		description: "TipJar is a mobile app that allows you to tip your favorite creators on social media."
	},
	{
		image: "/trigo/trigo-corp-card.jpg",
		url: "trigo-corp",
		bgColor: "bg-yellow-400",
		title: "Trigo Corp",
		width: 500,
		height: 900,
		subtitle: "UX / Front-End Development / Project Management",
		description: "Trigo Corp is a leading manufacturer of custom wines and sangrias."
	},
	{
		image: "/print/print-design-card.jpg",
		url: "print-design",
		bgColor: "bg-red-500",
		title: "Print Design",
		width: 500,
		height: 900,
		subtitle: "Creative Direction / Illustration / Apparel Design",
		description: "Print design is a form of visual communication that uses typography, photography, and illustration to convey a message."
	}
	// {
	// 	image: "/retireguide/retireguide-card.png",
	// 	url: "retireguide",
	// 	bgColor: "bg-indigo-50",
	// 	title: "Retire Guide",
	// 	width: 500,
	// 	height: 900,
	// 	subtitle: "Creative Direction / UX / Front-End Development / Project Management",
	// 	description: "RetireGuide.com is a free, comprehensive web resource designed to help you plan for retirement."
	// },
	// {
	// 	image: "/drugwatch/dw-title-card.jpg",
	// 	url: "drugwatch",
	// 	bgColor: "bg-blue-600",
	// 	title: "Drug Watch",
	// 	width: 500,
	// 	height: 900,
	// 	subtitle: "Creative Direction / UX / Front-End Development / Project Management",
	// 	description: "Drugwatch.com is a comprehensive web resource that provides information about prescription and over-the-counter medications."
	// },
	// {
	// 	image: "/consumernotice/consumer-notice-card.png",
	// 	url: "consumer-notice",
	// 	bgColor: "bg-slate-50",
	// 	title: "Consumer Notice",
	// 	width: 500,
	// 	height: 900,
	// 	subtitle: "Creative Direction / UX / Front-End Development / Project Management",
	// 	description: "ConsumerNotice.org is a comprehensive web resource that provides information about consumer rights and protections."
	// }
]


export default function Home() {

	const animations = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (

		<PageLayout animations={animations} bgColor='bg-slate-100 fixed'>
			<Hero />
			{CARDS.map((card, i) => (
				<CardAlt
					key={i}
					image={card.image}
					url={card.url}
					bgColor={card.bgColor}
					title={card.title}
					subtitle={card.subtitle}
					width={card.width}
					height={card.height}
					reverse={i % 2 === 0 ? true : false}
					description={card.description}
				/>
			))}
			<div className="grid grid-cols-12 grid-rows-6 grid-flow-row auto-rows-min gap-9 mt-48 mb-24">
				<h2 className={`${anton.className} col-start-3 col-span-9  mb-8 leading-none text-left uppercase`}>Over 15 Years <br />Building Products</h2>
				<div className="col-span-4 col-start-3 row-start-2">
					<p className="text-slate-500">July 2016 - PRESENT</p>
					<hr className="my-2" />
					<h3 className="font-extralight">Web Development Manager</h3></div>
				<div className="col-span-4 col-start-7 row-start-2 max-h-24"><p>
					<p className="font-bold mb-2">Launch That</p>
					<p className="">At Launch That, I play a critical role in shaping the digital presence of Launch That brands, ensuring high-performing, user-friendly websites that align with business goals.</p>
				</p></div>
				<div className="col-span-4 col-start-3 row-start-3">
					<p className="text-slate-500">August 2014 - July 2016</p>
					<hr className="my-2" />
					<h3>2. Lead UX Designer</h3></div>
				<div className="col-span-4 col-start-7 row-start-3">
					<p className="font-bold mb-2">Lightmaker</p>
					<p className="">Before Lightmaker was restructured as a vacation property rental solution, Lightmaker used to be a UX design and development agency. From concept to completion, I created impactful user experiences for reputable clients across the globe. This entailed developing strategic consultations, wireframes, high-fidelity prototyping, and pixel-perfect design systems.</p>
				</div>
				<div className="col-span-4 col-start-3 row-start-4">
					<p className="text-slate-500">October 2012 - August 2014</p>
					<hr className="my-2" />
					<h3 className="font-extralight">3. Web Developer</h3></div>
				<div className="col-span-4 col-start-7 row-start-4">
					<p className="font-bold mb-2">Client Intellect / Single Hop / INAP</p>
					<p className="">	Designed, developed, and managed the company&apos;s main WordPress and subsidiary sites. Coordinated with marketing teams to create assets for PPC campaigns.</p>
				</div>
				<div className="col-span-4 col-start-3 row-start-5">
					<p className="text-slate-500">October 2011 - October 2012</p>
					<hr className="my-2" />
					<h3 className="font-extralight">4. Web Developer</h3></div>
				<div className="col-span-4 col-start-7 row-start-5">
					<p className="font-bold mb-2">Unation</p>
					<p className="">I was the Front End/Lead Designer in charge of developing and creating a more enjoyable UX for the viewer. I created logos, web pages, illustrations, and other graphics that improved the overall presence of Unation.com.</p>
				</div>
				<div className="col-span-4 col-start-3 row-start-6">
					<p className="text-slate-500">October 2010 - October 2011</p>
					<hr className="my-2" />
					<h3 className="font-extralight">5. Graphic Designer</h3></div>
				<div className="col-span-4 col-start-7 row-start-6">
					<p className="font-bold mb-2">Topline Screen Printing</p>
					<p className="">Graphic Designer creating shirt designs, setting up large format printing equipment as well as setting up branding material for the company.</p>
				</div>
			</div>
		</PageLayout>
	)
}
