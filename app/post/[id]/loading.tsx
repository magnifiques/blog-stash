// @ts-nocheck
"use client";
import React from "react";
import { Vortex } from "react-loader-spinner";

function loading() {
  return (
    <div className="bg-black p-10 min-h-screen flex items-center justify-center text-white">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
}

export default loading;
