import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Samir</span>
          </h1>
          <h1 className='py-2 text-gray-700'>An Android app Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          Analytical, innovative, and motivated android developer available
          for freelance or part/full-time position
          </p>
          <p className=' text-gray-600 sm:max-w-[70%] m-auto'>
           s.harche@esi-sba.dz <br></br> 0792982030
          </p>
        
          <div className='flex items-center justify-between max-w-[330px] m-auto '>
            <a
                    href='https://www.linkedin.com/in/harche-samir-56a1a7224'
                    target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://www.facebook.com/rag.gar.140/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
            <a
              href='mailto:s.harche@esi-sba.dz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
