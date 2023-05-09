import React from "react";

type Props = {};

export default function Subscribe({}: Props) {
  return (
    <section className="text-center bg-wh-100 px-5 py-10 mb-16">
      <h4 className="font-semibold text-base">Subscribe to our newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter your email address to get top news right away!
      </p>

      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter your Email..."
      />

      <button className="bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3">
        Subscribe
      </button>
    </section>
  );
}
