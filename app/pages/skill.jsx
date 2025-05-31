'use client'

import { Code, Paintbrush, MonitorSmartphone, Users } from "lucide-react";

const skills = [
    {
        icon: <Code className="w-8 h-8 text-blue-500" />,
        title: "Web Development",
        desc: "Mampu membuat website modern menggunakan React, Next.js, dan Tailwind CSS."
    },
    {
        icon: <Paintbrush className="w-8 h-8 text-blue-500" />,
        title: "UI/UX Design",
        desc: "Mendesain tampilan yang menarik dan user-friendly menggunakan Figma & Canva."
    },
    {
        icon: <MonitorSmartphone className="w-8 h-8 text-blue-500" />,
        title: "Responsive Design",
        desc: "Membuat website yang responsif di semua ukuran layar."
    },
    {
        icon: <Users className="w-8 h-8 text-blue-500" />,
        title: "Teamwork",
        desc: "Terbiasa bekerja dalam tim dan berkolaborasi dalam proyek web."
    },
];

const languages = [
    { name: "HTML", img: "/images/html.png" },
    { name: "CSS", img: "/images/css.svg" },
    { name: "JavaScript", img: "/images/js.png" },
    { name: "PHP", img: "/images/php.png" },
    { name: "React", img: "/images/React.jpeg" },
    { name: "Next.js", img: "/images/next.svg" },
    { name: "Node.js", img: "/images/node.png" },
    { name: "Laravel", img: "/images/laravel.png" },
];

export default function Skill() {
    return (
        <div id="skill" className="flex items-center min-h-screen bg-white text-gray-800 px-4 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">
                    My <span className="text-blue-400">Skills</span>
                </h1>
                <p className="text-center text-gray-500 mb-10">
                    Beberapa keahlian yang saya kuasai dalam pengembangan web dan desain.
                </p>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-blue-500 hover:scale-[1.03] transition-all duration-300"
                        >
                            <div className="mb-4">{skill.icon}</div>
                            <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
                            <p className="text-sm text-gray-600">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Programming Languages / Tools */}
                <h2 className="text-2xl font-semibold text-center mb-6">Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {languages.map((lang, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <img src={lang.img} alt={lang.name} className="w-14 h-14 object-contain" />
                            <p className="text-sm mt-2">{lang.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
