"use client";
import { Button } from "@repo/ui/components/ui/button";
import { Header } from "@repo/ui/components/ui/header";
import useCountdownTimer from "@repo/ui/hooks/useCountdownTimer";
import { Progress } from "@repo/ui/components/ui/progress";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Logo,
  CardImage,
  StopWatchIcon as SV,
  StopWatchIcon,
  PaywallBG,
  AI,
  CloudTickIcon,
} from "~/assets";
import Image from "next/image";
import CuratedPhotosOffer from "./curatedOffer";
import { useState } from "react";

const sampleCuratedPhotosOfferData = [
  {
    id: "card-01",
    title: "10 Raw AI DATING Photos",
    features: [
      "Unlimited Generations",
      "Handpicked Photos",
      "Manual Editing by Experts",
    ],
    expertName: "Ben",
    expertQuote:
      "Hi! I'm Ben, Dating Expert. I will work with you till you get the best results. Guaranteed.",
    expertImageSrc: CardImage.src,
    originalPrice: 49,
    discountedPrice: 29,
  },
  {
    id: "card-02",
    title: "40 Raw AI DATING Photos",
    features: [
      "Unlimited Generations",
      "Handpicked Photos",
      "Manual Editing by Experts",
    ],
    expertName: "Ben",
    expertQuote:
      "Hi! I'm Ben, Dating Expert. I will work with you till you get the best results. Guaranteed.",
    expertImageSrc: CardImage.src,
    originalPrice: 69,
    discountedPrice: 39,
  },
  {
    id: "card-03",
    title: "10 CURATED Edited AI Photos",
    features: [
      "Unlimited Generations",
      "Handpicked Photos",
      "Manual Editing by Experts",
    ],
    expertName: "Ben",
    expertQuote:
      "Hi! I'm Ben, Dating Expert. I will work with you till you get the best results. Guaranteed.",
    expertImageSrc: CardImage.src,
    originalPrice: 500,
    discountedPrice: 249,
    badge: "Best value!",
  },
];

const PaywallPartial = () => {
  const router = useRouter();
  const [select, onSelect] = useState("card-03");
  const timmer = useCountdownTimer(40500);
  const handleHome = () => {
    router.push("/");
  };
  const handleBack = () => {
    router.back();
  };
  return (
    <main className="h-screen bg-[#030506]">
      <Header Logo={Logo.src} handleHome={handleHome} handleBack={handleBack} />
      <div className="flex items-center justify-between bg-gradient w-full h-10 px-3 text-white">
        <p className="uppercase font-semibold text-base">
          40% Off → first 69 buyers today!
        </p>
        <p className="uppercase font-semibold text-lg flex gap-1">
          <Image
            src={StopWatchIcon.src}
            alt={"stop watch"}
            width={16}
            height={16}
            loading="lazy"
          />
          {timmer}
        </p>
      </div>
      <div
        className="!h-[calc(100vh_-_282px)] bg-image !overflow-auto"
        style={{ backgroundImage: `url(${PaywallBG.src})` }}
      >
        <div className="flex flex-col justify-center items-center gap-8 px-2">
          <div className="w-full">
            <h1 className="heading">Select a package and </h1>
            <p className="heading flex gap-2">
              get your <Image src={AI.src} alt="AI" width={43} height={37} />{" "}
              pics
            </p>
          </div>
          {sampleCuratedPhotosOfferData.map((item) => (
            <CuratedPhotosOffer
              {...item}
              active={select === item.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
      <div className="border-t border-[#2E3438] bg-background flex gap-6 py-4 flex-col items-center justify-center sticky w-full bottom-0">
        <div className="flex items-center justify-center gap-1 leading-0 text-white font-semibold ">
          <Image
            src={CloudTickIcon.src}
            alt="CloudTickIcon"
            width={20}
            height={20}
            loading="lazy"
          />
          One-time payment
        </div>
        <Link className="flex justify-center" href={"/processing"}>
          <Button variant={"default"}>upload my photo</Button>
        </Link>
        <div className="text-[#76919A] text-sm font-semibold">
          {" "}
          100% satisfaction I 4h turnover I ultra realistic{" "}
        </div>
      </div>
    </main>
  );
};

export default PaywallPartial;
