import Image from 'next/image';
import React from 'react';
import { Hicon } from '~/assets';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <li className="flex gap-2 items-center pl-0.5 mt-1 first:mt-0">
      <Image loading="lazy" width={24} height={24} src={Hicon.src} alt="tickIcon" />
      <span className="self-stretch my-auto">{text}</span>
    </li>
  );
};

export default FeatureItem;