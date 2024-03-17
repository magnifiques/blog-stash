import React from "react";
import Twitter from "public/assets/social_twitter.png";
import Instagram from "public/assets/social_instagram.png";
import Facebook from "public/assets/social_facebook.png";
import Google from "public/assets/social_google.png";

import Image from "next/image";

type Props = {
  isDark?: boolean;
};

export default function Socials({ isDark = false }: Props) {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Twitter}
          alt="twitter"
          width={20}
          height={20}
          blurDataURL={`/_next/image?url=${Twitter}&w=16&q=1`}
        />
      </a>

      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Instagram}
          alt="Instagram"
          width={20}
          height={20}
          blurDataURL={`/_next/image?url=${Instagram}&w=16&q=1`}
        />
      </a>

      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Facebook}
          alt="Facebook"
          width={20}
          height={20}
          blurDataURL={`/_next/image?url=${Facebook}&w=16&q=1`}
        />
      </a>

      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Google}
          alt="Google"
          width={20}
          height={20}
          blurDataURL={`/_next/image?url=${Google}&w=16&q=1`}
        />
      </a>
    </div>
  );
}
