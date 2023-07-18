import Image from 'next/image';
import Login from '../images/TrybeTunes/Artist.jpg'

const ProjectCard = () => {
  const githubPath = "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  return (
    <div className='grid grid-cols-2  '>
      <section>
        <Image 
          src={ Login } 
          alt='Login Page' 
          width={500}
          height={300}
          />
      </section>
      <section className='p-10 text-center'>
        <div className='grid grid-rows-2'>
          <h1 className='text-2xl font-semibold leading-6 text-white'>Trybe Tunes</h1>
          <p className='text-sm font-semibold leading-6 text-white'>
            A Spotify type project that allows users to hear song 
            of their favorite artists.This website provides an interface
            for searching artists, select one album,select a song from this 
            album and add it to favorites. All of this using React and the spotfy API.  
          </p> 
        </div>

        <div className='flex flex-row justify-center space-x-10'>
          <div>
            <a className='h-6 w-6' href="https://github.com/MatheusLucas1">
              <span className='text-sm font-semibold leading-6 text-white'>Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  height='32'
                  width='32'
                >
                  <path d= {githubPath} />
                </svg>
              
            </a>
          </div>
          <div>
          <a className='h-6 w-6' href="https://main.dwn24yppjbji.amplifyapp.com/">
            <span className='text-sm font-semibold leading-6 text-white'>Live Demo</span>
<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" id="website"><path fill="#90cff1" d="M26.5 22h-21c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h21c.6 0 1 .4 1 1v14c0 .5-.4 1-1 1z"></path><path fill="#70b7e6" d="M26.5 17h-15c-2.8 0-5-2.2-5-5V7c0-.6.4-1 1-1h-2c-.6 0-1 .4-1 1v12h23v-3c0 .5-.4 1-1 1z"></path><path fill="#91ca60" d="M24.5 17h-7c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v1c0 .5-.4 1-1 1z"></path><path fill="#70bb57" d="M18 15.5V14h-.5c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h7c.6 0 1-.4 1-1h-7c-.3 0-.5-.2-.5-.5z"></path><path fill="#f0c9ae" d="M14 12.6v-2.1H7v3c0 1.9 1.6 3.5 3.5 3.5 1.8 0 3.2-1.3 3.5-3.1v-1.3z"></path><path fill="#e2b698" d="M8.5 13.5v-3H7v3c0 1.9 1.6 3.5 3.5 3.5.3 0 .5 0 .7-.1-1.5-.3-2.7-1.7-2.7-3.4z"></path><path fill="#8a6845" d="m14 12.7.5-1.7c.2-.8-.4-1.5-1.2-1.5 0-.9-.8-1.7-1.8-1.5l-3.7.6c-.9.1-1.4 1-1.3 1.8l.5 2.3 1.3-1c.2-.1.4-.2.6-.2h3.2c.2 0 .4.1.6.2l1.3 1z"></path><path fill="#745539" d="M8 10.4c-.1-.9.4-1.7 1.3-1.8l3-.5c-.2-.1-.5-.2-.8-.1l-3.7.6c-.9.1-1.4 1-1.3 1.8l.5 2.3 1.3-1-.3-1.3z"></path><path fill="#eef2fa" d="M13.5 22h5v4h-5z"></path><path fill="#d5e5f2" d="M16 23.5h2.5V22h-5v4H15v-1.5c0-.6.4-1 1-1z"></path><path fill="#607d95" d="M4.5 21c0 .6.4 1 1 1h21c.6 0 1-.4 1-1v-2h-23v2z"></path><path fill="#4b6c85" d="M6.5 21v-2h-2v2c0 .6.4 1 1 1h2c-.6 0-1-.5-1-1z"></path><path fill="#004463" d="M26.5 22.5h-21c-.8 0-1.5-.7-1.5-1.5V7c0-.8.7-1.5 1.5-1.5h21c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5zm-21-16c-.3 0-.5.2-.5.5v14c0 .3.2.5.5.5h21c.3 0 .5-.2.5-.5V7c0-.3-.2-.5-.5-.5h-21zm17 20h-13c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h13c.3 0 .5.2.5.5s-.2.5-.5.5z"></path><path fill="#004463" d="M27.5 19.5h-23c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h23c.3 0 .5.2.5.5s-.2.5-.5.5zm-2-11h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm0 2h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm-7 16h-5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5zm-4.5-1h4v-3h-4v3zm-3.5-8c-2.2 0-4-1.8-4-4v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 2.2-1.8 4-4 4z"></path><path fill="#004463" d="M7 13.2h-.2c-.2-.1-.3-.2-.3-.4L6 10.5c-.1-.6 0-1.1.3-1.6s.8-.8 1.3-.8l3.7-.6c.7-.1 1.3 0 1.7.4.4.3.6.7.7 1.1.4.1.7.3.9.6.3.4.5 1 .4 1.5l-.5 1.7c0 .2-.2.3-.3.3-.2 0-.3 0-.5-.1l-1.3-1c-.1-.1-.2-.1-.3-.1H8.9c-.1 0-.2 0-.3.1l-1.3 1c-.1.2-.2.2-.3.2zM8.9 11h3.2c.3 0 .7.1.9.3l.7.6.3-1c0-.2 0-.4-.2-.6s-.3-.3-.6-.3-.5-.2-.5-.5-.1-.6-.4-.8c-.2-.2-.5-.3-.8-.2l-3.6.6c-.3 0-.5.2-.7.4-.2.2-.2.5-.2.8l.3 1.6.7-.6c.3-.2.6-.3.9-.3z"></path><path fill="#004463" d="M12.5 15.6H11c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.5c.6 0 1-.4 1-1v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 1.1-.9 2-2 2z"></path><circle cx="16.5" cy="8" r=".5" fill="#004463"></circle><circle cx="16.5" cy="10" r=".5" fill="#004463"></circle><path fill="#004463" d="M25.5 12.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5z"></path><circle cx="16.5" cy="12" r=".5" fill="#004463"></circle><path fill="#004463" d="M24.5 17.5h-7c-.8 0-1.5-.7-1.5-1.5v-1c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5zm-7-3c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h7c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-7z"></path></svg>  
              
            </a>
          </div>              
        </div>

      </section>
      
    </div>
  )
}

export default ProjectCard;
