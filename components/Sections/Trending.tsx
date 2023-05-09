import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  trendingPosts: Array<Post>;
};

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      className={`${className} sm:h-auto sm:mt-0 relative mt-7 block w-full h-96 hover:opacity-70`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          src={post?.image}
          placeholder="blur"
          alt="tech"
          fill
          sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 left-0 p-2">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="mt-2 text-wh-100">{post?.title}</div>
      </div>
    </Link>
  );
};

export default function Trending({ trendingPosts }: Props) {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          Trending
        </div>
        <p>Find out what is going on in the world.</p>
      </div>

      <div className="sm:grid gap-5 mt-5 grid-cols-4 grid-row-2 sm:h-[600px]">
        <TrendingCard
          className="col-span-2 row-span-2 bg-gray-900"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 bg-gray-900"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 bg-gray-900"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 bg-gray-900"
          post={trendingPosts[3]}
        />
      </div>
    </section>
  );
}
