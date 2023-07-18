const Header = () => {
  return (
    <header className='bg-slate-600'>
      <nav className="mx-auto flex items-center justify-between p-6">
        <section>
          <h1 className='text-xl font-semibold leading-6 text-white'>
            Matheus.dev
          </h1>
        </section>
        <section className="hidden lg:flex lg:gap-x-12" >
          <a href="#" className="text-sm font-semibold leading-6 text-white">
              Home
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              About
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Projects
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Contact
            </a>
        </section>
      </nav>

    </header>
  )
}

export default Header;
