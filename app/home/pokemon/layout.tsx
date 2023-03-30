import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative border-2 border-green-300 rounded-md w-full min-h-[300px] p-10">
      <h4 className="text-sm absolute font-bold text-center text-white bg-green-300 p-2 rounded-sm top-0 right-0">
        Pokemon Layout
      </h4>
      {children}
    </div>
  );
};

export default layout;
