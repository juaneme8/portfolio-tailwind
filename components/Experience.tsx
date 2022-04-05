import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
type Props = {};

const Experience = (props: Props) => {
  return (
    <section id='experience' className='min-h-screen w-3/4 mx-auto mt-8'>
      <div className='text-center '>
        <h2>What Skils I Have</h2>
        <h5>My Experience</h5>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
        <div className='text-center bg-sky-400/40 hover:bg-gray-800 hover:transition hover:duration-300 hover:ease-in hover:border-sky-400/40 rounded-xl border border-transparent mt-8 py-4'>
          <h3 className='font-bold text-sky-400'>Frontend Development</h3>
          <div className='grid grid-cols-2 gap-8 px-2 md:px-10 py-10'>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>Next.js</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>Tailwind CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>Svelte</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='text-center bg-sky-400/40 hover:bg-gray-800 hover:transition hover:duration-300 hover:ease-in hover:border-sky-400/40 rounded-xl border border-transparent mt-8 py-4'>
          <h3 className='font-bold text-sky-400'>Backend Development</h3>
          <div className='grid grid-cols-2 gap-8 px-2 md:px-10 py-10'>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>Node.js</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>SQL Server</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='flex md:px-5 md:py-2'>
              <BsPatchCheckFill className='text-sky-400 mt-1' />
              <div className='flex flex-col text-left ml-4'>
                <h4 className=''>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
