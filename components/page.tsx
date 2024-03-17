import React from "react";
import Trending from "./Sections/Trending";
import Other from "./Sections/Other";
import Subscribe from "./Sections/Subscribe";
import Sidebar from "./Sections/Sidebar";
import { prisma } from "@/app/api/client";
import Music from "./Sections/Music";
import Entertainment from "./Sections/Entertainment";
import World from "./Sections/World";

export const revalidate = 60;

const getPosts = async () => {
  const posts: Array<Post> = await prisma.post.findMany();

  const formattedPosts = Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);

      return {
        ...post,
        image: imageModule.default,
      };
    })
  );
  return formattedPosts;
};

export default async function Index() {
  const posts = await getPosts();
  console.log(posts);
  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const musicPosts: Array<Post> = [];
    const entertainmentPosts: Array<Post> = [];
    const worldPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, index: number) => {
      if (index < 4) {
        trendingPosts.push(post);
      }

      if (post?.category == "Music") {
        musicPosts.push(post);
      } else if (post?.category == "Entertainment") {
        entertainmentPosts.push(post);
      } else if (post?.category == "World") {
        worldPosts.push(post);
      } else if (post?.category == "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [
      trendingPosts,
      musicPosts,
      entertainmentPosts,
      worldPosts,
      otherPosts,
    ];
  };

  const [
    trendingPosts,
    musicPosts,
    entertainmentPosts,
    worldPosts,
    otherPosts,
  ] = formatPosts();

  return (
    <>
      <main className="px-10 leading-7">
        <Trending trendingPosts={trendingPosts} />
        <div className="md:flex gap-10 mb-15">
          <div className="basis-3/4">
            <Music musicPosts={musicPosts} />
            <Entertainment entertainmentPosts={entertainmentPosts} />
            <World worldPosts={worldPosts} />
            <Other otherPosts={otherPosts} />
            <div className="hidden md:block">
              <Subscribe />
            </div>
          </div>

          <div className="basis-1/4">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
}
