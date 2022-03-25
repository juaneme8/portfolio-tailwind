import React from 'react';
import CallToAction from './CallToAction';
import HeaderSocials from './HeaderSocials';
import Image from 'next/image';
type Props = {};

const Header = (props: Props) => {
  return (
    <header className='min-h-screen w-3/4 text-white pt-28 text-center mx-auto relative'>
      <h5 className='font-light'>Hello I&apos;m</h5>
      <h1 className='font-semibold text-4xl'>Juan Lauria</h1>
      <h5 className='text-neutral-50'>Fullstack Developer</h5>
      <CallToAction />
      <div className='border border-sky-400 relative h-80 w-64 mx-auto rounded-full truncate'>
        <Image src='/assets/images/me.png' alt='me' layout='fill' objectFit='cover' objectPosition='center top' />
      </div>

      {/* Socials */}
      <HeaderSocials />

      {/* Image */}
      {/* Scroll Down */}
    </header>
  );
};

export default Header;
