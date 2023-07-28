import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import Image from 'next/image';
import ImageSlider from './ImageSlider';
import Album from '../images/TrybeTunes/Album.jpg';
import Artist from '../images/TrybeTunes/Artist.jpg';
import Login from '../images/TrybeTunes/Login.jpg';

const Projects = () => {
  const project1Images = [Login, Album, Artist];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="my-4">
        <h3 className="text-xl font-bold">TrybeTunes</h3>
        <div className="flex items-center"> {/* Wrap the description and image in a flex container */}
          <div className="w-1/2"> {/* Set the width to control the description area */}
            <p className="m-6 p-5 text-center"> {/* Center the text */}
              Um projeto do tipo aplicativo de música que permite aos usuários ouvir músicas
              de seus artistas favoritos. Este site fornece uma interface
              para pesquisar artistas, selecione um álbum, selecione uma música deste
              álbum e adicione-o aos favoritos. Tudo isso usando React e a API Spotify.
            </p>
            <div className="flex justify-center"> {/* Center the icons */}
              <a href="#" className="text-blue-500 underline mr-4">
                <RiPagesLine className="h-10 w-10" />
              </a>
              <a href="#" className="text-blue-500 underline">
                <FaGithub className="h-10 w-10" />
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <ImageSlider images={project1Images} />
          </div>
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-xl font-bold">Project Name 2</h3>
        <p className="mt-2">Description of the project 2.</p>
        <div className="flex justify-center"> {/* Center the icons */}
          <a href="https://main.dwn24yppjbji.amplifyapp.com/" className="text-blue-500 underline mr-4">
          <a href="#" className="text-blue-500 underline mr-4">
                <RiPagesLine className="h-10 w-10" />
              </a>
          </a>
          <a href="https://github.com/tryber/sd-027-b-project-trybetunes" className="text-blue-500 underline">
            <FaGithub className="h-10 w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
