import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import { useState } from 'react';

type Props = {};

const Nav = (props: Props) => {
  const [activeNav, setActiveNav] = useState('#');

  console.log(activeNav);

  return (
    <section
      id='nav'
      className='flex w-max bg-black/30 items-center rounded-full px-7 py-3 fixed bottom-7 gap-3 left-1/2 -translate-x-1/2 backdrop-blur-lg	'
    >
      <a
        href='#'
        className={`text-white/30 hover:text-white/60 text-xl bg-transparent rounded-full p-3 ${
          activeNav === '#' ? 'bg-white/10' : ''
        } `}
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={`text-white/30 hover:text-white/60 text-xl bg-transparent rounded-full p-3 ${
          activeNav === '#about' ? 'bg-white/10' : ''
        } `}
        onClick={() => setActiveNav('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={`text-white/30 hover:text-white/60 text-xl bg-transparent rounded-full p-3 ${
          activeNav === '#experience' ? 'bg-white/10' : ''
        } `}
        onClick={() => setActiveNav('#experience')}
      >
        <BiBook />
      </a>
      <a
        href='#services'
        className={`text-white/30 hover:text-white/60 text-xl bg-transparent rounded-full p-3 ${
          activeNav === '#services' ? 'bg-white/10' : ''
        } `}
        onClick={() => setActiveNav('#services')}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        className={`text-white/30 hover:text-white/60 text-xl bg-transparent rounded-full p-3 ${
          activeNav === '#contact' ? 'bg-white/10' : ''
        } `}
        onClick={() => setActiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </section>
  );
};

export default Nav;
