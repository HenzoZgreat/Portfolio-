"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfileImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative w-48 h-48 transition-all duration-1000 ease-out ${
        isLoaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        {/* Image with gradient mask */}
        <div
          className="w-full h-full"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
        >
          <Image
            src="/myprofile.png"
            alt="Henok Eshetu"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
