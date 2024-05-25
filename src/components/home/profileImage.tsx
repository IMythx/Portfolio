"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

const ProfileImage = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Image
      src={isMobile ? "/img2.jpg" : "/img.jpg"}
      alt="mahmoud helal"
      width={400}
      height={613}
      objectFit="cover"
      className="rounded-full sm:rounded-[20px] max-w-[240px] max-h-[240px] sm:max-w-none sm:max-h-none"
      priority={true}
      quality={100}
    />
  );
};

export default ProfileImage;
