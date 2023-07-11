import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Main from '@/components/Main'

const Home = () => {
  return (
    <main className='bg-slate-600'>
      <Header />
      <Main />
    </main>
  )
}

export default Home;
