import { cn } from '@repo/ui/lib/utils';
import React from 'react';

interface PricingInfoProps {
  originalPrice: number;
  discountedPrice: number;
  active?: boolean;
}

const PricingInfo: React.FC<PricingInfoProps> = ({ originalPrice, discountedPrice, active }) => {
  return (
    <div className="flex gap-1 items-end self-stretch my-auto h-6 leading-none text-right whitespace-nowrap">
      <span className={cn("text-sm  leading-6 font-semibold line-through", active?'text-[#BE7B4D]':'text-[#76919A]')}>${originalPrice}</span>
      <span className="text-xl font-bold text-white">${discountedPrice}</span>
    </div>
  );
};

export default PricingInfo;