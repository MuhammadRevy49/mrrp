'use client'

import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-blue-50 text-gray-700 py-6"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {year} Muhammad Revy Rizqy Pratama. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
