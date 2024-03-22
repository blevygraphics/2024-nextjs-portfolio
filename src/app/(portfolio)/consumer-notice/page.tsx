"use client";

import Heading from '@/app/_components/UI/Heading';
import Image from 'next/image';
import PageLayout from '@/app/_components/Layouts/PageLayout';
import Section from '@/app/_components/UI/Section';
import { anton } from '@/app/styles/fonts';
import ColorGrid from '@/app/_components/UI/ColorGrid';
import SocialIcons from '@/app/_components/UI/SocialIcons';



export default function ConsumerNotice() {
	const heading = ['Consumer', 'Notice'];

	const bgColor = ['bg-[#3f51b5]', 'bg-[#1a1a1a]', 'bg-[#ffffff]', 'bg-[#40c4ff]'];
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
		<PageLayout animations={variants} bgColor='bg-yellow-100 absolute'>
			<Section>
				<div className="col-start-2 mt-36">
					<Heading title={heading} />
				</div>
				<div className='col-start-2 col-span-6 mb-9'>
					<SocialIcons icons={SOCIAL_ICONS} />
				</div>
			</Section>
			<Section>
				<Image src="/consumernotice/cn-feature-card.png" className="w-full col-span-10 col-start-2 shadow-2xl" width={1400} height={1400} alt="testing image" />
				<h2 className={`${anton.className} col-start-2 col-span-10 leading-none text-left uppercase`}>My Role</h2>
				<p className="col-start-2 col-span-10 lg:columns-2 mb-24">
					As the Web Development Manager of ConsumerNotice.org, I led the transformation of our project through four key initiatives. Firstly, I orchestrated the discovery and creation of Brand Redesigns, vision and goals. Secondly, I championed the leveraging of a scalable design system, ensuring consistency and efficiency across platforms. Thirdly, I coordinated Scrum projects adeptly, fostering seamless communication between designers and developers, thus enhancing productivity and synergy. Lastly, I spearheaded change management initiatives across departments, driving organizational alignment and fostering a culture of innovation and collaboration. Through these efforts, I navigated challenges and steered our project towards success with clarity and purpose.
				</p>
				<ColorGrid bgColor={bgColor} textColor={textColor} />
				<Image src="/consumernotice/cn-homepage.jpg" className="col-start-2 col-span-10" width={1638} height={1024} alt="cn-homepage" title="Consumer Notice homepage Mockup" />
				<h2 className={`${anton.className} col-start-2 col-span-10 `}>User Persona Studies</h2>
				<Image src="/consumernotice/cn-persona-mommy-blogger.jpg" className="col-start-2 col-span-10" width={1638} height={1024} alt="cn-persona-mommy-blogger" title="Consumer Notice Mommy Blogger Persona" />
				<Image src="/consumernotice/cn-persona-elderly-man.jpg" className="col-start-2 col-span-10" width={1638} height={1024} alt="cn-persona-elderly-man" title="Consumer Notice Elderly Man Persona" />
				<h2 className={`${anton.className} col-start-2 col-span-10 `}>Mockups</h2>
				<Image src="/consumernotice/cn-desktop-2-up.jpg" className="col-start-2 col-span-10" width={1638} height={1024} alt="cn-desktop-2-up" title="Consumer Notice Desktop 2 up" />
				<Image src="/consumernotice/cn-mobile-3-up.jpg" className="col-start-2 col-span-10" width={1638} height={1024} alt="cn-mobile-3-up.jpg" title="Consumer Notice Mobile Mockup 3 up" />
				<Image src="/consumernotice/cn-mobile-diagonal.jpg" className="col-start-2 col-span-10" width={1638} height={1024} alt="cn-mobile-diagonal" title="Consumer Notice Mobile Mockups" />
			</Section>
		</PageLayout>
	)
}
