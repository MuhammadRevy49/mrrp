'use client'

import { Mail, Instagram, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen flex items-center bg-white px-4 py-16 text-gray-800">
      <div className="max-w-2xl mx-auto w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Contact <span className="text-blue-500">Me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-8"
        >
          Hubungi saya melalui email atau sosial media berikut.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 text-blue-500 text-lg"
        >
          <a href="mailto:mrevycode@gmail.com" className="hover:text-blue-600" target="_blank">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/yourusername" className="hover:text-pink-500" target="_blank">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://github.com/MuhammadRevy49" className="hover:text-gray-800" target="_blank">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-700" target="_blank">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
