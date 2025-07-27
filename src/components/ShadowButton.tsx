import React from 'react';
import { cn } from '@/lib/utils';

interface ShadowButtonProps {
  children: React.ReactNode;
  className?: string;
  shadowClassName?: string;
  onClick?: () => void;
  rotation?: string;
}

export const ShadowButton: React.FC<ShadowButtonProps> = ({
  children,
  className = '',
  shadowClassName = '',
  onClick,
  rotation = '',
}) => {
  return (
    <div className={cn("flex flex-col items-start relative", rotation)}>
      <div
        className={cn(
          "flex flex-col items-start absolute z-[1] bg-[#CCC] rounded-lg",
          shadowClassName
        )}
      />
      <button
        onClick={onClick}
        className={cn(
          "flex flex-col items-start border relative z-[2] bg-white rounded-lg border-solid border-black",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};
