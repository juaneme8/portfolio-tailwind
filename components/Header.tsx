import React from 'react';
import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';
import Image from "next/legacy/image";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className='min-h-screen w-3/4 md:pt-14 pt-8 text-center mx-auto relative'>
      <h5 className='font-light'>Hello I&apos;m</h5>
      <h1 className='font-semibold md:text-4xl text-2xl'>Juan Lauria</h1>
      <h5 className='text-neutral-50'>Fullstack Developer</h5>
      <CallToAction />

      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-sky-400 to-transparent pt-8 px-4 rounded-t-full mt-8'>
        <div className='h-82 w-82 md:h-64 md:w-56 mx-auto truncate'>
          <Image src='/assets/images/me.png' alt='me' width='288' height='500' objectFit='fill' />
        </div>
      </div>

      {/* Socials */}
      <HeaderSocials />

      {/* Image */}
      {/* Scroll Down */}
      <div className='absolute bottom-20 -right-9 rotate-90 text-sm cursor-pointer hidden md:block'>Scroll Down</div>
    </header>
  );
};

export default Header;
