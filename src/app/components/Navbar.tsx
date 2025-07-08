// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Projets", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl font-bold text-indigo-900">
          MonPortfolio
        </Link>
        <ul className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <li key={item.name}>
              <Link href={item.href} className="text-gray-900 font-semibold hover:text-indigo-900">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-gray-900 font-bold" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Menu mobile */}
        <div
          className={`fixed top-10 left-0 w-2/2 bg-white p-6 transform transition-transform ${
            open ? "translate-x-10" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-gray-900">
            {navItems.map(item => (
              <li key={item.name} onClick={() => setOpen(false)}>
                <Link href={item.href} className="text-lg hover:text-indigo-500">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
