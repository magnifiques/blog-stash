"use client";
import React, { useState } from "react";
import Image from "next/image";
import Socials from "./Socials";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditAndCategory from "./Contents/EditAndCategory";
import Article from "./Contents/Article";

type Props = {
  post: FormattedPost;
};

function Contents({ post }: Props) {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post?.title);
  const [titleError, setTitleError] = useState<string>("");

  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(post?.content);
  const [contentError, setContentError] = useState<string>("");

  const [tempContent, setTempContent] = useState<string>(content);

  const handleUpdateContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleUpdateContent,
    content: content,
    editable: isEditable,
    editorProps: {
      attributes: {
        class:
          "prose prose-base xl:prose-3xl leading-8 w-full max-w-full focus:outline-none",
      },
    },
  });

  const toggleEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };

  const formattedDate = new Date(post?.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validation
    if (title === "") setTitleError("This Field is Required!");
    if (editor?.isEmpty) setContentError("This Field is Required");

    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );

    const data = await response.json();

    toggleEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-wh-500">{`Home > ${post?.category} > ${post?.title}`}</h5>
      {/* Category and Edit button */}

      <EditAndCategory
        isEditable={isEditable}
        toggleEditable={toggleEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />

      <form onSubmit={handleSubmit}>
        {/* Header */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={(e) => handleTitleChange(e)}
                value={title}
              />
              {titleError && <p className="text-wh-900 mt-1">{titleError}</p>}
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex items-center gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-sm">{formattedDate}</h6>
          </div>
        </>
        {/* Image */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.category}
            src={post.image}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Article */}

        <Article
          contentError={contentError}
          isEditable={isEditable}
          title={title}
          setContent={setContent}
          editor={editor}
          titleError={titleError}
        />
        {/* Save Button */}
        {isEditable && (
          <div className="flex justify-end">
            <button className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold px-5 py-2 mt-5">
              Submit
            </button>
          </div>
        )}
      </form>

      {/* Social Links */}
      <div className="hidden md:block mt-10 w-1/4">
        <Socials isDark />
      </div>
    </div>
  );
}

export default Contents;
