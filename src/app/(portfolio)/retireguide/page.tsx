"use client";

import Heading from '@/app/_components/UI/Heading';
import Image from 'next/image';
import PageLayout from '@/app/_components/Layouts/PageLayout';
import Section from '@/app/_components/UI/Section';
import { anton } from '@/app/styles/fonts';
import ColorGrid from '@/app/_components/UI/ColorGrid';
import SocialIcons from '@/app/_components/UI/SocialIcons';



export default function Retireguide() {
	const heading = ['Retireguide', '.com'];

	const bgColor = ['bg-[#1871c3]', 'bg-[#151e3d]', 'bg-[#edf4fa]', 'bg-[#e54f40]'];
	const textColor = ['text-white', 'text-white', 'text-slate-950', 'text-slate-950'];


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

	const variants = {
		initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
		animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transition: { duration: 2, ease: [.7, 0, .6, .98] } },
		exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
	}

	return (
		<PageLayout animations={variants} bgColor='bg-blue-100 absolute'>
			<Section>
				<div className="col-start-2 mt-36">
					<Heading title={heading} />
				</div>
				<div className='col-start-2 col-span-6 mb-9'>
					<SocialIcons icons={SOCIAL_ICONS} />
				</div>
			</Section>
			<Section>
				<Image src="/retireguide/retireguide-title.png" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="Retireguide Case Study" />
				<h2 className={`${anton.className} col-start-2 col-span-10 leading-none text-left uppercase`}>My Role</h2>
				<p className="col-start-2 col-span-10 columns-2 mb-24">
					As the Web Development Manager of RetireGuide.com, I led the transformation of our project through four key initiatives. Firstly, I orchestrated the discovery and creation of Brand Redesigns, vision and goals. Secondly, I championed the leveraging of a scalable design system, ensuring consistency and efficiency across platforms. Thirdly, I coordinated Scrum projects adeptly, fostering seamless communication between designers and developers, thus enhancing productivity and synergy. Lastly, I spearheaded change management initiatives across departments, driving organizational alignment and fostering a culture of innovation and collaboration. Through these efforts, I navigated challenges and steered our project towards success with clarity and purpose.
				</p>
				<ColorGrid bgColor={bgColor} textColor={textColor} />
				<Image src="/retireguide/homepage-hero.jpg" className="col-start-2 col-span-10" width={1638} height={1024} alt="testing image" />
				<h2 className={`${anton.className} col-start-2 col-span-10 `}>Design System</h2>
				<iframe className="col-start-2 col-span-10 mb-24" width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fg7LbAo4g5ZYgoSBefLKPEL%2FRG---Design-System%3Ftype%3Ddesign%26node-id%3D1%253A56%26mode%3Ddesign%26t%3DIeOQL0Wb5aX4jf8u-1"></iframe>
				<Image src="/retireguide/desktop-3-up.jpg" className="col-start-2 col-span-10 " width={2000} height={1400} alt="testing image" />
				<Image src="/retireguide/desktop-diagonal.jpg" className="col-start-2 col-span-10 " width={2000} height={1400} alt="testing image" />
				<Image src="/retireguide/mobile-three-up.jpg" className="col-start-2 col-span-10 " width={2000} height={1400} alt="testing image" />
				<Image src="/retireguide/mobile-diagonal.jpg" className="col-start-2 col-span-10 " width={2000} height={1400} alt="testing image" />
			</Section>
		</PageLayout>
	)
}
