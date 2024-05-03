import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="h-[65vh] flex flex-col justify-center items-center">
      <div className="flex-1 max-w-4xl mx-auto text-center pt-20">
        <p className="text-red-500 text-4xl font-mono">Oops</p>
        <p className="text-gray-500 text-2xl">Page Not Found</p>
      </div>
      <div className="flex-1">
        <div className="flex gap-3 my-2">
          <p className="text-7xl font-extrabold text-red-600">4</p>
          <span className="text-7xl font-extrabold text-gray-600">🤪</span>
          <p className="text-7xl font-extrabold text-blue-600">4</p>
        </div>
        <Link
          to="/"
          className="text-blue-500 text-xl uppercase flex gap-3 items-center"
        >
          Go To Home <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
