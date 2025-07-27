import React from 'react';
import { ShadowButton } from './ShadowButton';

export const CommunitySection: React.FC = () => {
  return (
    <section 
      className="flex w-full h-[677px] flex-col justify-center items-center gap-2.5 shrink-0 px-[374px] py-12 max-md:px-10 max-md:py-12 max-sm:h-auto max-sm:min-h-[400px] max-sm:p-5"
      style={{
        backgroundImage: `url('/lovable-uploads/3d58be91-afd8-4673-ae51-94d7d4215600.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex w-[736px] max-w-full flex-col items-center gap-8 bg-white px-0 py-8 rounded-2xl border-2 border-solid border-black max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-6 max-sm:flex-col max-sm:items-stretch max-sm:w-full max-sm:max-w-none max-sm:px-0 max-sm:py-6">
        <h2 className="self-stretch text-black text-center text-[40px] font-semibold px-8 py-0 max-md:gap-5 max-md:text-[32px] max-md:px-5 max-md:py-0 max-sm:gap-6 max-sm:w-full max-sm:max-w-none max-sm:text-2xl max-sm:px-4 max-sm:py-0">
          Community
        </h2>
        
        <p className="self-stretch text-black text-center text-2xl font-normal px-8 py-0 max-sm:w-full max-sm:max-w-none max-sm:gap-6 max-sm:px-0 max-sm:py-6">
          Join us as we help cranky escape the grind
        </p>
        
        <div className="flex items-center gap-6 px-8 py-0 max-sm:w-full max-sm:max-w-none max-sm:gap-6 max-sm:px-0 max-sm:py-6" role="group" aria-label="Social media and purchase options">
          <ShadowButton
            className="w-[49px] h-[45px] flex-col items-start gap-2.5 self-stretch p-2.5 max-sm:w-full max-sm:max-w-none max-sm:gap-6 max-sm:shrink-0 max-sm:px-0 max-sm:py-6"
            shadowClassName="w-[49px] h-[45px] left-0.5 top-0.5 max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-6 max-sm:flex-col max-sm:items-stretch max-sm:w-full max-sm:max-w-none max-sm:shrink-0 max-sm:px-0 max-sm:py-6"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4d75fcf09aa2f5099dbf3dc494af0c59adcbb350?width=56"
              alt="Social platform"
              className="w-7 h-[34px] relative -ml-2.5 mt-[5px]"
            />
          </ShadowButton>

          <ShadowButton
            className="w-[49px] h-[45px] flex-col items-start gap-2.5 self-stretch p-2.5 max-sm:w-full max-sm:max-w-none max-sm:gap-6 max-sm:shrink-0 max-sm:px-0 max-sm:py-6"
            shadowClassName="w-[49px] h-[45px] left-[1.73px] top-[1.815px] max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-6 max-sm:flex-col max-sm:items-stretch max-sm:w-full max-sm:max-w-none max-sm:shrink-0 max-sm:px-0 max-sm:py-6"
            rotation="rotate-[6.528deg]"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0f08d44572ffa7c265d2b2181ab4be85440ffe2d?width=58"
              alt="Social platform"
              className="h-[26px] shrink-0 self-stretch"
            />
          </ShadowButton>

          <ShadowButton
            className="h-[45px] justify-center items-center gap-2.5 self-stretch px-4 py-2.5 max-sm:w-full max-sm:max-w-none max-sm:gap-6 max-sm:shrink-0 max-sm:px-0 max-sm:py-6"
            shadowClassName="w-28 h-10 bottom-[-1.5px] -right-px max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-6 max-sm:flex-col max-sm:items-stretch max-sm:w-full max-sm:max-w-none max-sm:shrink-0 max-sm:px-0 max-sm:py-6"
          >
            <span className="text-black text-xl font-medium max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-6 max-sm:w-full max-sm:max-w-none max-sm:shrink-0 max-sm:px-0 max-sm:py-6">
              buy now
            </span>
          </ShadowButton>
        </div>
      </div>
    </section>
  );
};
