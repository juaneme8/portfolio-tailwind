import Image from 'next/image';
import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

type Props = {};

const About = (props: Props) => {
  return (
    <section id='about' className='min-h-screen w-3/4 mx-auto'>
      <h5 className='text-center'>Get to Know</h5>
      <h2 className='text-center text-xl text-sky-400 font-semibold'>About Me</h2>

      <div className='grid grid-cols-[35%_50%] gap-[15%]'>
        <div className='w-full aspect-square relative rounded-3xl truncate rotate-12 hover:transition hover:duration-1000 hover:ease-in bg-red-200'>
          <Image src='/assets/images/me-about.jpg' alt='About Me' layout='fill' />
        </div>
        <div>
          <div className='flex gap-16 justify-center'>
            <article className='bg-sky-400/40 rounded-lg p-4 text-gray-800 flex justify-center flex-col items-center gap-3'>
              <FaAward className='h-6 w-6' />
              <h5>Experience</h5>
              <small className='text-xs'>3+ Years Working</small>
            </article>
            <article className='bg-sky-400/40 rounded-lg p-4 text-gray-800 flex justify-center flex-col items-center gap-3'>
              <FiUsers />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='bg-sky-400/40 rounded-lg p-4 text-gray-800 flex justify-center flex-col items-center gap-3'>
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, sunt eum? Quasi sunt sapiente ea deleniti
            commodi amet magni nesciunt accusamus. Maxime vitae culpa esse reiciendis, itaque quam doloribus provident.
          </p>
          <a href='#contact'>Let&apos; talk!</a>
        </div>
      </div>
    </section>
  );
};

export default About;
