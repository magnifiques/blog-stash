import { prisma } from "@/app/api/client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sections/Sidebar";
import Contents from "@/components/Contents";
import React from "react";

export const revalidate = 60;
type Props = {
  params: { id: string };
};

const getPost = async (id: string) => {
  const post: Post | null = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with id:${id} does not exist`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };
  return formattedPost;
};

const page = async ({ params }: Props) => {
  const { id } = params;

  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <section className="bg-orange-100">
      <Navbar />
      <main className="px-10 leading-7">
        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            <Contents post={post} />
          </div>
          <div className="basis-1/4">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default page;
