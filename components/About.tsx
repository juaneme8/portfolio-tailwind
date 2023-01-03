import Image from "next/image";
import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

type Props = {};

const About = (props: Props) => {
  return (
    <section id='about' className='min-h-screen w-3/4 mx-auto pt-4'>
      <h5 className='text-center'>Get to Know</h5>
      <h2 className='text-center text-xl text-sky-400 font-semibold'>About Me</h2>

      <div className='grid md:grid-cols-[30%_65%] grid-cols-1 md:gap-[5%] mt-2 md:mt-8'>
        <div className='bg-gradient-to-r from-transparent via-sky-400 to-transparent w-full mx-auto mt-8 mb-10 aspect-square rounded-3xl'>
          <div className='relative rotate-12 hover:rotate-0 transition duration-300 ease-in w-full aspect-square rounded-3xl truncate bg-gradient-to-tr'>
            <Image src='/assets/images/me-about.jpg' alt='About Me' fill sizes="100vw" />
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div className='flex flex-row gap-3 justify-center flex-wrap content-center'>
            <article className='basis-2/5 md:basis-auto bg-sky-400/40 border border-transparent rounded-lg p-5 text-gray-800 flex justify-center flex-col items-center gap-3 hover:bg-transparent hover:border-sky-400/40 transition-colors ease-in transition-duration-300'>
              <FaAward className='h-6 w-6 text-sky-400' />
              <h5 className='text-white'>Experience</h5>
              <small className='text-xs text-neutral-50/80'>3+ Years Working</small>
            </article>
            <article className='basis-2/5 md:basis-auto bg-sky-400/40 border border-transparent rounded-lg p-5 text-gray-800 flex justify-center flex-col items-center gap-3 hover:bg-transparent hover:border-sky-400/40 transition-colors ease-in transition-duration-300'>
              <FiUsers className='h-6 w-6 text-sky-400' />
              <h5 className='text-white'>Clients</h5>
              <small className='text-xs text-neutral-50/80'>200+ Worldwide</small>
            </article>
            <article className='basis-2/5 md:basis-auto bg-sky-400/40 border border-transparent rounded-lg p-5 text-gray-800 flex justify-center flex-col items-center gap-3 hover:bg-transparent hover:border-sky-400/40 transition-colors ease-in transition-duration-300'>
              <VscFolderLibrary className='h-6 w-6 text-sky-400' />
              <h5 className='text-white'>Projects</h5>
              <small className='text-xs text-neutral-50/80'>80+ Completed</small>
            </article>
          </div>

          <p className='mt-4 mb-6 md:mt-8 md:mb-12 text-neutral-50/80 text-center md:text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, sunt eum? Quasi sunt sapiente ea deleniti
            commodi amet magni nesciunt accusamus. Maxime vitae culpa esse reiciendis, itaque quam doloribus provident.
          </p>
          <a
            href='#contact'
            className='text-gray-800 bg-sky-400 hover:bg-gray-800  rounded-full px-4 py-2 border border-gray-800 hover:border hover:text-white hover:border-white transition duration-300 ease-in max-w-max mx-auto md:mr-auto'
          >
            Let&apos; talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
