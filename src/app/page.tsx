"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Languages, Github, Cpu, Mail, Code2, Database, Terminal, Layout } from 'lucide-react';

const content = {
  pt: {
    role: "// Desenvolvedor Fullstack",
    heroTitle: "Especialista em construir",
    heroHighlight: "soluções robustas.",
    about: "Desenvolvedor focado em automação, APIs e interfaces modernas.",
    techTitle: "Tecnologias & Ferramentas",
    contactTitle: "Entre em contato",
    techs: [
      { name: "Python", icon: <Terminal />, category: "Backend" },
      { name: "JavaScript/TS", icon: <Code2 />, category: "Frontend/Backend" },
      { name: "Node.js", icon: <Cpu />, category: "Runtime" },
      { name: "Next.js/React", icon: <Layout />, category: "Frontend" },
      { name: "Tailwind CSS", icon: <Layout />, category: "Styling" },
      { name: "Firebase/Supabase", icon: <Database />, category: "Database" },
      { name: "Linux (Zorin)", icon: <Terminal />, category: "OS" },
      { name: "Git/GitHub", icon: <Github />, category: "Version Control" }
    ]
  },
  en: {
    role: "// Fullstack Developer",
    heroTitle: "Expert in building",
    heroHighlight: "robust solutions.",
    about: "10-year-old developer focused on automation, APIs, and modern interfaces. Zorin OS enthusiast and performance lover.",
    techTitle: "Technologies & Tools",
    contactTitle: "Get in touch",
    techs: [
      { name: "Python", icon: <Terminal />, category: "Backend" },
      { name: "JavaScript/TS", icon: <Code2 />, category: "Frontend/Backend" },
      { name: "Node.js", icon: <Cpu />, category: "Runtime" },
      { name: "Next.js/React", icon: <Layout />, category: "Frontend" },
      { name: "Tailwind CSS", icon: <Layout />, category: "Styling" },
      { name: "Firebase/Supabase", icon: <Database />, category: "Database" },
      { name: "Linux (Zorin)", icon: <Terminal />, category: "OS" },
      { name: "Git/GitHub", icon: <Github />, category: "Version Control" }
    ]
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  if (!mounted) return null;
  const t = content[lang];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-neutral-950 text-white" : "bg-neutral-50 text-neutral-900"}`}>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tighter">MOZART<span className="text-red-600">.DEV</span></h1>
        <div className="flex gap-4">
          <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="p-2 hover:bg-white/10 rounded-full transition"><Languages size={20} /></button>
          <button onClick={() => setIsDark(!isDark)} className="p-2 hover:bg-white/10 rounded-full transition">{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <header className="mb-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-mono mb-2">{t.role}</motion.p>
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {t.heroTitle} <br/><span className="text-red-600 underline decoration-2 underline-offset-8">{t.heroHighlight}</span>
          </motion.h2>
          <p className="text-neutral-400 text-lg max-w-2xl">{t.about}</p>
        </header>

        <section className="mb-32">
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 border-l-4 border-red-600 pl-4">{t.techTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.techs.map((tech, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className={`p-6 rounded-xl border ${isDark ? "bg-neutral-900/50 border-neutral-800" : "bg-white border-neutral-200 shadow-sm"}`}>
                <div className="text-red-600 mb-3">{tech.icon}</div>
                <h4 className="font-bold">{tech.name}</h4>
                <p className="text-[10px] uppercase text-neutral-500 font-bold tracking-widest">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="py-20 border-t border-white/10 text-center">
          <h3 className="text-3xl font-bold mb-8">{t.contactTitle}</h3>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/mozartdev-0" target="_blank" className="flex items-center gap-2 hover:text-red-500 transition">
              <Github /> GitHub
            </a>
            <a href="mailto:mozartpersonal@hotmail.com" className="flex items-center gap-2 hover:text-red-500 transition">
              <Mail /> Email
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
