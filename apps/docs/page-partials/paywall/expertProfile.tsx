import Image from 'next/image';
import React from 'react';

interface ExpertProfileProps {
  name: string;
  quote: string;
  imageSrc: string;
}

const ExpertProfile: React.FC<ExpertProfileProps> = ({ name, quote, imageSrc }) => {
  return (
    <div className="flex gap-2 items-center py-3 pl-3 mt-3 w-full text-xs text-white rounded-2xl bg-[#2F0803]">
      <Image loading="lazy" src={imageSrc} width={48} height={48} className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[999px]" alt={`${name}, Dating Expert`} />
      <p className="self-stretch my-auto w-[259px]">
        "{quote}"
      </p>
    </div>
  );
};

export default ExpertProfile;