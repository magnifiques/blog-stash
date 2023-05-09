import React from "react";
import Socials from "../Socials";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <section className="my-5 ">
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <Socials isDark />
      </div>
      <Subscribe />

      <Image
        className="hidden md:block my-8 w-full"
        src={Ad2}
        placeholder="blur"
        alt="Advert 2"
        width={500}
        height={1000}
      />

      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-5">
        <Image
          src={AboutProfile}
          placeholder="blur"
          alt="About Profile"
          width={500}
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Giorgio Moroder
      </h4>
      <p className="text-wh-500 text-center text-sm">
        My name is Giovanni Giorgio But everybody calls me Giorgio
      </p>
    </section>
  );
}
