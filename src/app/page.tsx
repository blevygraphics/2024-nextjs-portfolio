"use client";

import CardAlt from './_components/UI/Card-alt';
import Hero from './_components/UI/Hero';
import PageLayout from './_components/Layouts/PageLayout';
// import { anton } from './styles/fonts';
// import Image from 'next/image';

const CARDS = [
	{
		image: "/wocket/wocket-wallet-card.gif",
		url: "wocket-wallet",
		bgColor: "bg-orange-400",
		title: "Wocket Wallet",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Wocket Wallet is a smart wallet that securely stores all of your credit, debit, loyalty, and gift cards in one place. It also has a built-in camera to take pictures of your cards and a display to show you which card you are using."
	},
	{
		image: "/tipjar/tipjar-card.png",
		url: "tipjar",
		bgColor: "bg-yellow-300",
		title: "TipJar",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "TipJar is a mobile app that allows you to tip your favorite creators on social media."
	},
	{
		image: "/annuity/annuity-card.png",
		url: "annuity",
		bgColor: "bg-green-400",
		title: "Annuity",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Annuity.org is a free, comprehensive web resource designed to answer all your questions about annuities and structured settlements."
	},
	{
		image: "/retireguide/retireguide-card.png",
		url: "retireguide",
		bgColor: "bg-indigo-50",
		title: "Retire Guide",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "RetireGuide.com is a free, comprehensive web resource designed to help you plan for retirement."
	},
	{
		image: "/drugwatch/dw-title-card.jpg",
		url: "drugwatch",
		bgColor: "bg-blue-600",
		title: "Drug Watch",
		width: 500,
		height: 900,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Drugwatch.com is a comprehensive web resource that provides information about prescription and over-the-counter medications."
	},
	{
		image: "/asbestos/asbestos-icon.svg",
		url: "asbestos",
		bgColor: "bg-blue-900",
		title: "Asbestos",
		width: 400,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Asbestos.com is a comprehensive web resource that provides information about asbestos exposure and mesothelioma."
	},
	{
		image: "/trigo/trigo-corp-card.jpg",
		url: "trigo-corp",
		bgColor: "bg-yellow-400",
		title: "Trigo Corp",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Trigo Corp is a leading manufacturer of custom wines and sangrias."
	},
	{
		image: "/hula/hula-card.jpg",
		url: "hula",
		bgColor: "bg-yellow-200",
		title: "Hula Growth Holdings",
		width: 500,
		height: 900,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Hula Growth Holdings is a private equity firm that invests in and acquires companies in the consumer packaged goods industry."
	},
	{
		image: "/consumernotice/consumer-notice-card.svg",
		url: "consumer-notice",
		bgColor: "bg-slate-50",
		title: "Consumer Notice",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "ConsumerNotice.org is a comprehensive web resource that provides information about consumer rights and protections."
	},
	{
		image: "/cheesecake-factory/cheesecake-card.jpg",
		url: "cheesecake-factory",
		bgColor: "bg-pink-600",
		title: "Cheesecake Factory",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "The Cheesecake Factory is a restaurant chain that specializes in cheesecakes and other desserts."
	},
	{
		image: "/npe/npe-card.jpg",
		url: "national-plastics-expo",
		bgColor: "bg-blue-600",
		title: "NPE 2018",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "The National Plastics Expo is an annual trade show for the plastics industry."
	},
	{
		image: "/arbor-memorial/arbor-memorial-card.jpg",
		url: "arbor-memorial",
		bgColor: "bg-lime-50",
		title: "Arbor Memorial",
		width: 500,
		height: 400,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Arbor Memorial is a leading provider of funeral, cremation, and cemetery services in Canada."
	},
	{
		image: "/print/print-design-card.jpg",
		url: "print-design",
		bgColor: "bg-red-500",
		title: "Print Design",
		width: 500,
		height: 900,
		subtitle: "Creative Direction / UX / Front-End Development / Project Management",
		description: "Print design is a form of visual communication that uses typography, photography, and illustration to convey a message."
	}
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
		</PageLayout>
	)
}
