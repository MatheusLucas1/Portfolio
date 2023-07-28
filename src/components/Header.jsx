const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 text-center flex flex-col items-center">
      
        <h1 className="text-4xl font-bold">Matheus Lucas</h1>
        <h2 className="text-xl"> Desenvolvedor Full Stack JavaScript | React | Node.js</h2>
   

      <section className="p-4 w-1/3 flex flex-col">
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
