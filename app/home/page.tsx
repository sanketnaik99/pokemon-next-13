import React from "react";

const page = () => {
  return (
    <div className="relative border-2 border-blue-300 rounded-md w-full min-h-[300px]">
      <h4 className="text-sm absolute font-bold text-center text-white bg-blue-300 p-2 rounded-sm top-0 right-0">
        Home Page
      </h4>
      <div className="flex min-h-[300px] w-full justify-center items-center">
        <h3 className="text-xl font-bold">Select a tab to begin</h3>
      </div>
    </div>
  );
};

export default page;
