import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GroupImage, Logo } from "~/assets";

export default function Home() {
  return (
    <main className="bg-background h-screen relative">
      <div
        className="w-full h-[100vh] max-h-[50%] top-2/5 bg-cover bg-center overflow-hidden flex flex-col justify-end items-end"
        style={{ backgroundImage: `url(${GroupImage.src})` }}
      ></div>
      <div className="absolute bd h-1/2 overflow-hidden top-[30%]  rounded-full  w-full"></div>
      <div className="relative z-20 h-1/2 px-1 pb-5  flex flex-col justify-between items-center">
        <div className="flex flex-col gap-4 justify-start items-center text-center">
          <Image
            loading="lazy"
            src={Logo.src}
            alt="Logo"
            width={113}
            height={40}
          />
          <h1 className="text-[#FFF5ED] text-3xl font-bold uppercase">
            Get the perfect
            <br />
            dating pics, instantly
          </h1>
          <p className="text-[#FFF5ED] text-lg font-normal px-4">
            Use AI to generate authentic pictures, designed to get you more
            matches
          </p>
        </div>
        <Link className="w-full flex justify-center" href={"/upload"}>
          <Button variant={"default"}>Yes I want This !</Button>
        </Link>
      </div>
    </main>
  );
}
