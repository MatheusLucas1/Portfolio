
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {

  return (
    <div className='flex flex-col items-center justify-center p-8'>
      <h2 className="text-2xl font-bold p-5">Contact Me:</h2>
      <div className="flex space-x-8 justify-center">
        
        <div className='flex flex-col items-center p-5'>
          <MdOutlineMailOutline  className='h-10 w-10'/>
          <p className="mt-2">matheus.lucas1105@gmail.com</p>
        </div>
        <div className='flex flex-col items-center p-5'>
          <p className="mt-1"><a href="https://www.linkedin.com/in/matheus-bueno-lucas-dev/" className="text-blue-500 underline"><BsLinkedin className='h-10 w-10'/></a></p>
          <p>Matheus Lucas</p>
        </div>
      </div>
    </div>

  )

}

export default Footer;