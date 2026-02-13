import React from "react";

function Card() {
  return (
  
      <div className="bg-amber-200 rounded-xl h-15 ">
        <div className="flex justify-end h-8 px-4 relative overflow-hidden ">
          <img
            className="w-14 -top-2 absolute"
            src="/images/icon-work.svg"
            alt="img"
          />
        </div>
        <div className="bg-Navy-900 p-5 rounded-xl text-white ">
          <div className="flex justify-between items-center">
            <p className="text-[18px]">Work</p>
            <img className="w-3" src="/images/icon-ellipsis.svg" alt="icon" />
          </div>
          <h2 className="text-3xl font-light mt-4 mb-2 ">32hrs</h2>
          <p className="font-light text-xs text-Navy-200 mb-1.5">
            Last Week-36hrs
          </p>
        </div>
      </div>
   
  );
}

export default Card;
