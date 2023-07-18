import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Projects from '@/components/Projects'

const Home = () => {
  return (
    <main className='bg-slate-400'>
      <Header />
      <Main />
      <Projects />
    </main>
  )
}

export default Home;
