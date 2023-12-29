import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-9">
			<div className="grid lg:grid-cols-2 lg:max-w-7xl">
				<div>
					<h1 className="text-6xl font-black">Blaine Levy</h1>
					<p>Creative Designer | Progressive Developer | Compassionate Leader</p>
				</div>
				<div>
					<Image src="/clay-profile.jpg" width={609} height={609} alt="testing image"></Image>
					<div>
						<a href="/" target="_blank">
							<Image src="/github.svg" width={36} height={36} alt="testing image"></Image>
						</a>
						<Image src="/linkedin.svg" width={36} height={36} alt="testing image"></Image>
						<Image src="/facebook.svg" width={36} height={36} alt="testing image"></Image>
						<Image src="/instagram.svg" width={36} height={36} alt="testing image"></Image>
						<Image src="/x.svg" width={36} height={36} alt="testing image"></Image>
						<Image src="/behance.svg" width={36} height={36} alt="testing image"></Image>
						<Image src="/behance.svg" width={36} height={36} alt="testing image"></Image>
					</div>
				</div>
			</div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<Link href="annuity" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Annuity{' '}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Find in-depth information about Next.js features and API.
					</p>
				</Link>
			</div>
		</main>
	)
}
