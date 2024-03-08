"use client";

import { anton } from '../../styles/fonts';

export default function Footer() {
  return (
    <footer className="w-full items-stretch bg-slate-950 text-white">
      <div className="grid grid-cols-12 gap-9 mx-9 min-h-screen items-center">
        <h2 className={`col-start-3 col-span-9 ${anton.className} mb-6 leading-none uppercase`}>Let&apos;s Connect</h2>
        <p className="col-start-3 col-span-9">Creative Direction • UI / UX • Front-End Development • Project Management</p>
      </div>
    </footer>
  )

}