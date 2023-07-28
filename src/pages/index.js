import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='bg-gray-900 text-white font-mono text-lg'>
      <Header />
      <Skills/>
      <Projects />
      <Footer /> 
    </div>
  );
}
