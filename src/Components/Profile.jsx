import React from "react";

function Profile() {
  return (
    <div className="bg-Navy-900 rounded-xl grid-rows-2 ">
      <div className="bg-Purple-600 p-6 rounded-xl">
        <div className="w-14 h-14 outline-2 rounded-full outline-white">
          <img src="/images/image-jeremy.png" alt="img" />
        </div>
        <div className="my-6 ">
          <p className="text-xs text-Navy-200">Report for</p>
          <h2 className="text-3xl text-white font-light mb-8">Jeremy Roboson</h2>
        </div>
      </div>

      <ul className=" p-6 text-sm text-Navy-200 font-light grid gap-2">
        <li>Daily</li>
        <li className="">Weekly</li>
        <li className="">Monthly</li>
      </ul>
    </div>
  );
}

export default Profile;
