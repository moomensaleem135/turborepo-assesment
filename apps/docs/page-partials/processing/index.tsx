"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Rectangle, Man, Process } from "~/assets";
const ProcessingPartial = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("paywall");
    }, 300000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="h-screen">
      <div className="fingerprint scanning">
        <div
          className="h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(${Man.src}), url(${Rectangle.src})`,
            backgroundPosition: "center top",
          }}
        ></div>
        <Image
          src={Process.src}
          alt="processing..."
          width={275}
          className="absolute top-1/2 left-[16%] w-4/5"
          height={60}
          objectFit="center"
		  loading="lazy"
        />
        <div className="shadow"></div>
      </div>
    </main>
  );
};

export default ProcessingPartial;
