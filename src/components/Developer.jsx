import React from "react";
import terminal from '../assets/terminal.png';

export default function Developer() {
  return (
    <div className="w-full text-white bg-black">
      <div className="px-4 py-6 max-w-[1240px]  mx-auto md:flex">
        <div className="py-10 space-y-4">
            <h1>Superpower of DEFi Developers</h1>
            <p>Checkout the <span className="blue">defination</span> ,the <span className="blue">quickstart</span> guide to start a ass kicking career in this field.Building can make you creative So be the next billionair by building</p>
        </div>
        <div className="flex justify-center w-full py-12">
            <img src={terminal} className="w-[300px] shadow-lg shadow-cyan-500/50" alt="" />
        </div>
      </div>
    </div>
  );
}
