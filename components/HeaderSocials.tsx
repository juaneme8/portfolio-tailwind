import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

type Props = {};

const HeaderSocials = (props: Props) => {
  return (
    <div className='flex flex-col space-y-3 absolute left-0 bottom-12'>
      <a href='#' target='_blank' className='text-sky-400 hover:text-white'>
        <FaGithub className='w-8 h-8' />
      </a>
      <a href='#' target='_blank' className='text-sky-400 hover:text-white'>
        <FaLinkedin className='w-8 h-8' />
      </a>
    </div>
  );
};

export default HeaderSocials;
