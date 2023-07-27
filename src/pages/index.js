import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Header />
      <Skills/>
      <Projects />
      <Footer /> 
    </div>
  );
}
