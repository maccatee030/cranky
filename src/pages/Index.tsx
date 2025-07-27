import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ImageSection } from '@/components/ImageSection';
import { CommunitySection } from '@/components/CommunitySection';

const Index: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ImageSection
          src="https://api.builder.io/api/v1/image/assets/TEMP/6b190d6555be4cf51a95040488c46b3fd5797396?width=2880"
          alt="Hero background"
          className="flex w-full h-[677px] flex-col justify-end items-center gap-2.5 shrink-0 object-cover max-sm:h-[400px]"
        />
        
        <ImageSection
          src="https://api.builder.io/api/v1/image/assets/TEMP/841f18a88ffcf63047cfc19da7d6a1fe886c635c?width=1164"
          alt="Product showcase"
          className="w-[582px] h-[417px] max-w-full object-contain max-sm:w-full max-sm:h-auto max-sm:max-w-[400px]"
          containerClassName="h-[577px] px-0 py-20"
        />
        
        <CommunitySection />
      </main>
    </div>
  );
};

export default Index;
