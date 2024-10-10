"use client";
import { Button } from "@repo/ui/components/ui/button";
import { Header } from "@repo/ui/components/ui/header";
import { Progress } from "@repo/ui/components/ui/progress";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo, AfterImage } from "~/assets";

const UploadPartial = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };
  const handleBack = () => {
    router.back();
  };
  return (
    <main className="h-screen bg-[#030506]">
      <Header Logo={Logo.src} handleHome={handleHome} handleBack={handleBack} />
      <Progress value={40} />
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${AfterImage.src})` }}
      >
        <div>
          <h1 className="heading">Upload your photo</h1>
          <p className="paragraph">To get the perfect AI dating pics</p>
        </div>
        <Link className="flex justify-center" href={"/processing"}>
          <Button>upload my photo</Button>
        </Link>
      </div>
    </main>
  );
};

export default UploadPartial;
