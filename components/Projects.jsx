import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/bloodappcover.jpg';
import cryptoImg from '../public/assets/projects/techappcover.jpg'
import netflixImg from '../public/assets/projects/bookappcover.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full\'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest  text-[#5651e5]'>What I've built </p>
        <h2  className='py-4'>Some of my projects</h2>

 <p className='md:hidden text-m tracking-widest  text-[#5651e5] '>Blood Donation App</p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Blood Donation App'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='Java | Firebase | Google-maps Api '
          />
<p className='md:hidden text-m tracking-widest  text-[#5651e5] '> Tech Store App </p>       
          <ProjectItem
            title='Tech Store App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='Java | Firebase | Admin-Client app'

          />
<p className='md:hidden text-m tracking-widest  text-[#5651e5] '>  Books Exchange App </p>

          <ProjectItem
            title='Book Exchange App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='Java | Firebase | Google-maps Api'

          />
      
        </div>
      </div>
    </div>
  );
};

export default Projects;
