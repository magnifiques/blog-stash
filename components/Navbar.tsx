import Link from "next/link";
import React from "react";
import Socials from "./Socials";
import Image from "next/image";
import Ad1 from "/public/assets/ad-1.jpg";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4 ">
        <div className="hidden sm:block">
          <Socials />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
      </nav>

      <div className="flex justify-between gap-8 mt-5 mb-5 mx-10">
        <div className="basis-2/3 md:mt-4">
          <h1 className="font-bold text-3xl md:text-5xl">The Blog Stash</h1>
          <p className="text-sm mt-3">Find Everything about everyone!</p>
        </div>

        <div className="basis-full relative w-auto h-32 bg-wh-500">
          <Image
            src={Ad1}
            placeholder="blur"
            alt="Advert 1"
            fill
            sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
            style={{ objectFit: "cover" }}
            blurDataURL={`/_next/image?url=${Ad1}&w=16&q=1`}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
