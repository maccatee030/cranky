import React from 'react';

interface ImageSectionProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
}) => {
  return (
    <section className={`flex w-full flex-col justify-center items-center gap-2.5 ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        className={className}
      />
    </section>
  );
};
