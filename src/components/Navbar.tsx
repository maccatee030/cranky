import React from 'react';
import { ShadowButton } from './ShadowButton';

export const Navbar: React.FC = () => {
  return (
    <header className="flex w-full max-w-[1200px] h-[84px] justify-between items-center shrink-0 absolute -translate-x-2/4 z-10 bg-white px-8 py-0 rounded-2xl border-2 border-solid border-black left-2/4 top-[57px] max-md:w-[calc(100%_-_40px)] max-md:max-w-none max-md:px-5 max-md:py-0 max-md:left-5 max-sm:h-[60px] max-sm:w-[calc(100%_-_20px)] max-sm:px-4 max-sm:py-0 max-sm:rounded-xl max-sm:left-2.5 max-sm:top-5">
      <h1 className="text-black text-[40px] font-medium max-md:text-[32px] max-sm:text-2xl">
        cranky
      </h1>
      
      <nav className="flex items-center gap-6" role="navigation" aria-label="Main navigation">
        <ShadowButton
          className="w-[49px] h-[45px] flex-col items-start gap-2.5 self-stretch p-2.5"
          shadowClassName="w-[49px] h-[45px] left-0.5 top-0.5"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5c4d00abf281a532bf990623b589aa3db36ebda0?width=56"
            alt="Social media icon"
            className="w-7 h-[34px]"
          />
        </ShadowButton>

        <ShadowButton
          className="w-[49px] h-[45px] flex-col items-start gap-2.5 self-stretch p-2.5"
          shadowClassName="w-[49px] h-[45px] left-[1.73px] top-[1.815px]"
          rotation="rotate-[6.528deg]"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1bd9def1a570beaa6d90f9961817f85db9f45775?width=58"
            alt="Platform icon"
            className="h-[26px] shrink-0 self-stretch"
          />
        </ShadowButton>

        <ShadowButton
          className="h-[45px] justify-center items-center gap-2.5 self-stretch px-4 py-2.5"
          shadowClassName="w-28 h-10 bottom-[-1.5px] -right-px"
        >
          <span className="text-black text-xl font-medium">
            buy now
          </span>
        </ShadowButton>
      </nav>
    </header>
  );
};
