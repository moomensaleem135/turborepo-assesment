import React, { Dispatch, SetStateAction } from 'react';
import ExpertProfile from './expertProfile';
import FeatureItem from './featureItem';
import PricingInfo from './priceInfo';
import { cn } from '@repo/ui/lib/utils';
import { Badge } from '@repo/ui/components/ui/badge';

interface CuratedPhotosOfferProps {
	features: string[];
	expertName: string;
	expertQuote: string;
	expertImageSrc: string;
	originalPrice: number;
	discountedPrice: number;
	active: boolean,
	id: string;
	onSelect: Dispatch<SetStateAction<string>>;
	title: string;
	badge?:string;
}

const CuratedPhotosOffer: React.FC<CuratedPhotosOfferProps> = ({
	features,
	expertName,
	expertQuote,
	expertImageSrc,
	originalPrice,
	discountedPrice,
	active,
	title,
	id,
	badge,
	onSelect,
}) => {
	return (
		<section className={cn("flex flex-col self-stretch px-4 pt-5 pb-4 rounded-2xl relative border-2  border-solid  ", active?'bg-[#450C05] border-orange-600':'bg-[#2E3438] border-[#3C474E]')}>
			{badge? <Badge className='bg-gradient w-fit text-lg font-bold absolute right-5 -top-4 rounded-xl'>{badge}</Badge>:null}
			<header className="flex gap-6 justify-between items-center w-full">
				<div className="flex gap-2 items-center self-stretch my-auto">
					<div className="flex flex-col self-stretch my-auto w-6">
						{/* Replacing custom div structure with a radio button */}
						<input
							type="radio"
							className="form-radio h-8 w-8 accent-white "
							name="curatedPhotosSelection"
							id={id}
							checked={active}
							onChange={()=>{
								onSelect(id)
							}}
						/>
					</div>
					<h2 className="flex flex-col justify-center self-stretch  text-xl font-semibold leading-6 text-white uppercase w-full ">
						<span className="gap-1 self-stretch w-full">
							{title}
						</span>
					</h2>
				</div>
				<PricingInfo originalPrice={originalPrice} discountedPrice={discountedPrice} active={active} />
			</header>
			{active && <div className="flex flex-col mt-4 w-full">
				<ul className="flex flex-col items-start w-full text-base font-medium leading-none text-neutral-100">
					{features.map((feature, index) => (
						<FeatureItem key={index} text={feature} />
					))}
				</ul>
				<ExpertProfile name={expertName} quote={expertQuote} imageSrc={expertImageSrc} />
			</div>}
		</section>
	);
};

export default CuratedPhotosOffer;
