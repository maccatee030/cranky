import React from 'react';
import { CopyToClipboard } from './CopyToClipboard';

export const HeroSection: React.FC = () => {
  const tokenString = "ErvpSLCXM8RrUR4LeL99HoYgfV7WCExEGrt9NtzQbonk";

  return (
    <section 
      className="flex w-full h-[826px] flex-col justify-end items-center gap-2.5 shrink-0 relative px-[374px] py-12 max-md:px-10 max-md:py-12 max-sm:h-auto max-sm:min-h-[400px] max-sm:p-5"
      style={{
        backgroundImage: `url('/lovable-uploads/ddc5c82a-9a63-4b8f-b502-58270216310e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <CopyToClipboard text={tokenString} displayText={tokenString} />
    </section>
  );
};
