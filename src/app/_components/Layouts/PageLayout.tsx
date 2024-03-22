import Blob from "../UI/Blob";
import Footer from "../UI/Footer";
import ScrollBar from "../UI/ScrollBar";
import Link from 'next/link';


interface ChildProps {
  animations: {
    initial: object,
    animate: object,
    exit: object
  },
  bgColor: string,
  children: React.ReactNode
}

export default function PageLayout({ children, animations, bgColor }: ChildProps) {
  return (
    <>
      <ScrollBar />
      <Blob animations={animations} bgColor={bgColor} />
      <header className="grid grid-cols-2 gap-9 px-4 py-4 items-right fixed w-full z-40 bg-white frame-y">
        <Link prefetch={false} href="/" className="flex">
          <svg width="32" height="21" viewBox="0 0 640 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="220" width="200" height="420" fill="#020617" />
            <rect x="440" y="220" width="200" height="200" fill="#020617" />
            <rect y="220" width="200" height="200" fill="#020617" />
            <rect width="200" height="200" fill="#020617" />
          </svg>
          {/* <p className="pl-2">BL.CO</p> */}
        </Link>
        <Link prefetch={false} href="mailto:blevygraphics@gmail.com" className="flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </Link>
      </header>
      <div className="frame-x bg-white w-12 fixed z-20 h-screen"></div>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}