'use client'

import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "WarGo - Platform Online",
    desc: "Platform digital untuk penghubung UMKM dan Warung untuk mempermudah distribusi produk UMKM kuliner. Dibuat dengan Next.js dan MySQL.",
    link: "https://wargo.vercel.app",
    repo: "https://github.com/MuhammadRevy49/wargo"
  },
  {
    title: "Website UMKM Keripik",
    desc: "Website promosi keripik lokal dengan fitur kontak, layanan usaha dan galeri produk. Dibuat dengan Next JS dan Tailwind.",
    link: "https://kribi.vercel.app",
    repo: "https://github.com/username/keripik"
  },
  {
    title: "Aplikasi Prajurit TNI",
    desc: "Aplikasi desktop berbasis Electron & MySQL untuk manajemen data pensiunan prajurit TNI yang memiliki berbagai fitur.",
    link: "#",
    repo: "https://github.com/username/tni-crud"
  },
];

export default function Project() {
  return (
    <div id="projects" className="min-h-screen flex items-center bg-gray-50 px-4 py-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Berikut adalah beberapa proyek yang telah saya kerjakan:
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white border border-blue-400 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
              <div className="flex items-center space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black flex items-center gap-1"
                >
                  <Github className="w-4 h-4" /> Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
