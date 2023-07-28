
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {

  return (
  <div className="flex space-x-5">
    <h2 className="text-2xl font-bold">Contact:</h2>
    <p className="mt-2">Email: matheus.lucas1105@gmail.com</p>
    <p className="mt-1"><a href="https://www.linkedin.com/in/matheus-bueno-lucas-dev/" className="text-blue-500 underline"><BsLinkedin className='h-10 w-10'/></a></p>
  </div>
  )

}

export default Footer;