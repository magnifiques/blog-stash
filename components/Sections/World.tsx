import React from "react";
import Card from "../Card";

type Props = {
  worldPosts: Array<Post>;
};

export default function World({ worldPosts }: Props) {
  return (
    <section className="border-2 p-4 mt-4">
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          WORLD
        </h4>
        <p className="font-bold text-2xl">What is going on?</p>
      </div>

      <div className="sm:flex justify-between gap-8">
        <Card
          post={worldPosts[0]}
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        />
        <Card
          post={worldPosts[1]}
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        />
        <Card
          post={worldPosts[2]}
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
        />
      </div>

      <Card
        post={worldPosts[3]}
        className="sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
      />
    </section>
  );
}
