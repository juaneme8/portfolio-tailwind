import React from 'react';

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div className='mt-10 space-x-2 '>
      <a
        href='/assets/cv.pdf'
        download
        className='inline-block text-sky-400 bg-gray-800 hover:bg-sky-400  rounded-full px-4 py-2 border border-sky-400 hover:border hover:text-gray-800 hover:border-gray-800 transition duration-300 ease-in'
      >
        CV.pdf
      </a>
      <a
        href='#'
        className='inline-block text-gray-800 bg-sky-400 hover:bg-gray-800  rounded-full px-4 py-2 border border-gray-800 hover:border hover:text-white hover:border-white transition duration-300 ease-in'
      >
        Let&apos;s Talk!
      </a>
    </div>
  );
};

export default CallToAction;
