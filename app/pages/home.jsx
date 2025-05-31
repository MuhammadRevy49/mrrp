'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-6 md:px-20 gap-12 max-w-7xl mx-auto"
    >
      {/* Gambar dengan animasi */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0 w-70 h-70 sm:w-48 sm:h-48 md:w-90 md:h-90  overflow-hidden"
      >
        <img
          src="/images/mrevy.png"
          alt="Muhammad Revy R.P."
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Teks dengan animasi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col justify-center text-left max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Saya seorang <span className="text-blue-500">Web Developer</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Saya berpengalaman membuat website modern menggunakan teknologi seperti React, Next.js, dan Tailwind CSS. 
          Saya fokus pada pengembangan frontend yang responsif dan menarik.
        </p>
        <div className="my-3">
          <a
            href="#skill"
            className="px-4 py-2 text-blue-400 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white transition-all"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </motion.div>
    </div>
  );
}
