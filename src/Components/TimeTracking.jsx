import React from "react";
import Profile from "./Profile";
import Cards from "./Cards";

function TimeTracking() {
  return (
    <div className="bg-Navy-950 min-h-screen w-screen flex justify-center items-center">
      <div className="p-4 gap-4 w-3xl grid grid-cols-1 grid-rows-2 md:grid-cols-4">
        <div className="row-span-3">
          <Profile />
        </div>

        <Cards></Cards>
      </div>
    </div>
  );
}

export default TimeTracking;
