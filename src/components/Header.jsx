const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      {/* <nav className="mx-auto flex items-center justify-between p-6">
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
      </nav> */}
    
        <h1 className="text-4xl font-bold">Matheus </h1>
        <h2 className="text-xl"> Desenvolvedor Full Stack JavaScript | React | Node.js</h2>
   

      <section className="p-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-2">
          Olá! Meu nome é Matheus.Sou um programador Full Stack e
            estudante de Análise e Desenvolvimento de Sistemas na PUC-PR.
        </p>
      </section>
    </header>
  )
}

export default Header;
