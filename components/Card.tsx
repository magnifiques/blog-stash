import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight?: string;
  isLongForm?: boolean;
  isShortCard?: boolean;
  post: Post;
};

export default function Card({
  className,
  imageHeight,
  isLongForm,
  isShortCard,
  post,
}: Props) {
  const { id, title, author, createdAt, updatedAt, snippet } = post || {};

  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            src={post?.image}
            placeholder="blur"
            alt="Advert 1"
            fill
            sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}>
          <h4
            className={`font-bold hover:text-accent-orange ${
              isShortCard ? "text-base" : "text-lg"
            } ${isShortCard ? "line-clamp-2" : ""}`}
          >
            {title}
          </h4>
        </Link>
        <div className={`${isShortCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{author}</h5>
          <h6 className="text-wh-300 text-xs">{date}</h6>
        </div>

        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {snippet}
        </p>
      </div>
    </div>
  );
}
