import Link from "next/link";
import React, { ReactNode } from "react";

const layout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { pageNumber: number };
}) => {
  const link1 = params.pageNumber - 1 > 0 ? Number(params.pageNumber) - 1 : 1;
  const link2 = params.pageNumber - 1 > 0 ? Number(params.pageNumber) : 2;
  const link3 = params.pageNumber - 1 > 0 ? Number(params.pageNumber) + 1 : 3;
  return (
    <div className="relative border-2 border-green-300 rounded-md w-full min-h-[300px] p-10">
      <h4 className="text-sm absolute font-bold text-center text-white bg-green-300 p-2 rounded-sm top-0 right-0">
        Pokemon Layout
      </h4>
      {children}
      <nav aria-label="Page navigation" className="flex justify-center mt-4">
        <ul className="inline-flex space-x-2">
          <li>
            <Link
              href={`/home/pokemon/${
                params.pageNumber - 1 > 0 ? Number(params.pageNumber) - 1 : 1
              }`}
            >
              <button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link href={`/home/pokemon/${link1}`}>
              <button
                className={[
                  "w-10 h-10 transition-colors duration-150 rounded-full focus:shadow-outline",
                  Number(params.pageNumber) === link1
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "bg-white text-blue-500 hover:bg-blue-100",
                ].join(" ")}
              >
                {link1}
              </button>
            </Link>
          </li>
          <li>
            <Link href={`/home/pokemon/${link2}`}>
              <button
                className={[
                  "w-10 h-10 transition-colors duration-150 rounded-full focus:shadow-outline",
                  Number(params.pageNumber) === link2
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "bg-white text-blue-500 hover:bg-blue-100",
                ].join(" ")}
              >
                {link2}
              </button>
            </Link>
          </li>
          <li>
            <Link href={`/home/pokemon/${link3}`}>
              <button
                className={[
                  "w-10 h-10 transition-colors duration-150 rounded-full focus:shadow-outline",
                  Number(params.pageNumber) === link3
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : "bg-white text-blue-500 hover:bg-blue-100",
                ].join(" ")}
              >
                {link3}
              </button>
            </Link>
          </li>
          <li>
            <Link href={`/home/pokemon/${Number(params.pageNumber) + 1}`}>
              <button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default layout;
