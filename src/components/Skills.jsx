import { FaJs, FaNodeJs, FaDocker, FaPython, FaDatabase, FaServer, FaReact, FaHtml5, FaCss3, FaCheckSquare, FaPalette, FaCubes } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiSequelize, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import { DiCss3, DiJavascript1 } from "react-icons/di";

const Skills = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div>
        <h2 className="text-2xl font-bold text-center">Back End</h2>
        <ul className="mt-2 flex flex-wrap">
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><FaNodeJs className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><FaDocker className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><SiTypescript className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><FaPython className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><SiMysql className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><SiSequelize className="h-10 w-10"/></li>
          
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center">Front End</h2>
        <ul className="mt-2 flex flex-wrap">
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><FaReact className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><FaJs className="h-10 w-10" /></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><FaHtml5 className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><DiCss3 className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><SiTailwindcss className="h-10 w-10"/></li>
          <li className="flex items-center justify-center h-20 w-20 bg-gray-800 rounded-md text-white mx-2 my-1"><SiNextdotjs className="h-10 w-10"/></li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
