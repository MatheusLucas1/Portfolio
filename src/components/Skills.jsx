import { FaJs, FaNodeJs, FaDocker, FaPython, FaDatabase, FaServer, FaReact, FaHtml5, FaCss3, FaCheckSquare, FaPalette, FaCubes } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiSequelize, SiNextDotJs, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="p-4">
      <div>
        <h2 className="text-2xl font-bold">Back End</h2>
        <ul className="mt-2 flex flex-wrap">
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><FaJs /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><FaNodeJs /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><FaDocker /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><SiTypescript /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><FaPython /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><SiMysql /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><SiSequelize /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-blue-500 rounded-md text-white mx-2 my-1"><FaServer /></li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Front End</h2>
        <ul className="mt-2 flex flex-wrap">
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><FaJs /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><FaReact /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><FaHtml5 /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><FaCss3 /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><FaCheckSquare /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><FaPalette /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><SiTailwindcss /></li>
          <li className="flex items-center justify-center h-10 w-10 bg-green-500 rounded-md text-white mx-2 my-1"><SiNextDotJs /></li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
