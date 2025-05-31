'use client'

import { CircleDollarSign, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-39 flex items-center justify-between p-3 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-400 shadow-md text-white' : 'bg-transparent'
                }`}
            >
                <div className={`transition-all ${isScrolled ? 'text-white hover:text-black' : 'text-black hover:text-blue-400'}`}>
                    <a href="/" className="font-bold flex items-center">
                        <CircleDollarSign className="mr-1" /> MRRP
                    </a>
                </div>
                <Menu onClick={() => setIsSidebarOpen(true)} className={`md:hidden block cursor-pointer ${isScrolled ? 'text-white' : 'text-black'}`} />
                <ul className="hidden md:flex">
                    <a href="#home" className={`p-2 m-1 transition-all ${isScrolled ? 'text-white' : 'text-black'}`}>Home</a>
                    <a href="#skill" className={`p-2 m-1 transition-all ${isScrolled ? 'text-white' : 'text-black'}`}>Skill</a>
                    <a href="#projects" className={`p-2 m-1 transition-all ${isScrolled ? 'text-white' : 'text-black'}`}>Projects</a>
                    <a href="#about" className={`p-2 m-1 transition-all ${isScrolled ? 'text-white' : 'text-black'}`}>About</a>
                    <a href="#contact" className={`p-2 m-1 font-bold rounded hover:opacity-30 transition ${isScrolled ? 'bg-white text-blue-400' : 'bg-blue-400 text-white'}`}>Contact</a>
                </ul>
            </nav>

            {/* Sidebar overlay + panel */}
            <div className={`fixed inset-0 z-40 transition duration-300 ${isSidebarOpen ? 'visible' : 'invisible'}`}>
                <div
                    className={`absolute inset-0 bg-black/90 bg-opacity-30 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
                <div
                    className={`absolute top-0 right-0 h-full w-60 bg-gray-100 shadow-lg transition-transform duration-300 ${
                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    style={{ willChange: 'transform' }}
                >
                    <div className="flex flex-col">
                        <div className="flex justify-between p-3">
                            <div className="flex items-center hover:text-blue-400 transition-all select-none">
                                <CircleDollarSign className="mr-1 text-black" />
                                <h1 className="font-bold text-black">MRRP</h1>
                            </div>
                            <X onClick={() => setIsSidebarOpen(false)} className={`text-gray-800 hover:text-blue-400 cursor-pointer transition-all`} />
                        </div>
                        <div className="flex flex-col text-center">
                            <a
                                href="#home"
                                onClick={() => {
                                    setActiveLink('home');
                                    setIsSidebarOpen(false);
                                }}
                                className={`p-2 mx-3 rounded transition-all ${
                                    activeLink === 'home' ? 'bg-blue-400 text-white font-bold' : 'text-black hover:bg-blue-400'
                                }`}
                            >
                                Home
                            </a>
                            <div className="border-t border-gray-300 mx-3 my-2"></div>
                            <a
                                href="#skill"
                                onClick={() => {
                                    setActiveLink('skill');
                                    setIsSidebarOpen(false);
                                }}
                                className={`p-2 mx-3 rounded transition-all ${
                                    activeLink === 'skill' ? 'bg-blue-400 text-white font-bold' : 'text-black hover:bg-blue-400'
                                }`}
                            >
                                Skill
                            </a>
                            <div className="border-t border-gray-300 mx-3 my-2"></div>
                            <a
                                href="#projects"
                                onClick={() => {
                                    setActiveLink('projects');
                                    setIsSidebarOpen(false);
                                }}
                                className={`p-2 mx-3 rounded transition-all ${
                                    activeLink === 'projects' ? 'bg-blue-400 text-white font-bold' : 'text-black hover:bg-blue-400'
                                }`}
                            >
                                Projects
                            </a>
                            <div className="border-t border-gray-300 mx-3 my-2"></div>
                            <a
                                href="#about"
                                onClick={() => {
                                    setActiveLink('about');
                                    setIsSidebarOpen(false);
                                }}
                                className={`p-2 mx-3 rounded transition-all ${
                                    activeLink === 'about' ? 'bg-blue-400 text-white font-bold' : 'text-black hover:bg-blue-400'
                                }`}
                            >
                                About
                            </a>
                            <div className="border-t border-gray-300 mx-3 my-2"></div>
                            <a
                                href="#contact"
                                onClick={() => {
                                    setActiveLink('contact');
                                    setIsSidebarOpen(false);
                                }}
                                className={`p-2 mx-3 rounded transition-all ${
                                    activeLink === 'contact' ? 'bg-blue-400 text-white font-bold' : 'text-black hover:bg-blue-400'
                                }`}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
