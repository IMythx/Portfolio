"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

const ProfileImage = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[240px] sm:max-w-[400px] h-[240px] sm:h-[613px] relative">
      {!loaded && (
        <Image
          src={isMobile ? "/img2.jpg" : "/img.jpg"}
          alt="mahmoud helal"
          fill
          objectFit="cover"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className="rounded-full sm:rounded-[20px] invisible"
          priority={true}
          quality={100}
        />
      )}
      {!loaded && (
        <Skeleton className="w-full h-full bg-background rounded-full sm:rounded-[20px]" />
      )}
      {loaded && (
        <Image
          src={isMobile ? "/img2.jpg" : "/img.jpg"}
          alt="mahmoud helal"
          fill
          objectFit="cover"
          className="rounded-full sm:rounded-[20px]"
          priority={true}
          quality={100}
        />
      )}
    </div>
  );
};

export default ProfileImage;
