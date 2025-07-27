import React from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

interface CopyToClipboardProps {
  text: string;
  displayText?: string;
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  displayText,
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className="flex justify-center items-center gap-11 self-stretch border relative max-w-[800px] bg-white px-8 py-5 rounded-lg border-solid border-black max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-3 max-sm:flex-col max-sm:items-stretch max-sm:px-4 max-sm:py-3">
      <div className="text-black text-base font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-3 max-sm:px-4 max-sm:py-3">
        {displayText || text}
      </div>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        aria-label="Copy to clipboard"
      >
        <div className="text-black text-xl font-bold max-md:gap-5 max-md:px-5 max-md:py-[15px] max-sm:gap-3 max-sm:px-4 max-sm:py-3">
          copy
        </div>
        <Copy size={24} className="text-black" />
      </button>
    </div>
  );
};
