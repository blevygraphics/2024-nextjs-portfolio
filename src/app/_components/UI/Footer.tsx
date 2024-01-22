"use client";

import { anton } from '../../styles/fonts';

export default function Footer() {
  return (
    <footer className="w-full items-stretch bg-slate-950 text-white">
      <div className="grid grid-cols-12 gap-9 mx-9 min-h-screen items-center">
        <h2 className={`${anton.className} mb-6 leading-none max-w-7xl w-full uppercase col-span-11 col-start-2`}>Let's Connect</h2>
        <p className="col-span-12 col-start-2">Creative Direction • UI / UX • Front-End Development • Project Management</p>
      </div>
    </footer>
  )

}