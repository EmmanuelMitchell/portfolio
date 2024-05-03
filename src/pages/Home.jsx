import React from "react";
import Herosection from "../components/Herosection";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-fuchsia-50 to-blue-50 py-2">
      <div className="bg-gradient-to-r from-fuchsia-50 to-blue-50 py-20">
        <div className="sm:px-4 lg:max-w-7xl mx-auto">
          <Herosection />
        </div>
      </div>
      <div className="sm:px-4 lg:block max-w-4xl mx-auto mb-4">
        <div className="flex justify-center gap-4 ">
          <div className="bg-gradient-to-r from-fuchsia-600 to-blue-600 w-10 h-10 rounded-full flex justify-center">
            <Link
              to="https://www.facebook.com/emmanuel.mitchell.771"
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <FaFacebook className="text-2xl text-white" />
            </Link>
          </div>
          <div className="bg-gradient-to-r from-fuchsia-600 to-blue-600 w-10 h-10 rounded-full flex justify-center">
            <Link
              to="https://www.linkedin.com/in/emmanuel-mitchell-b12337244/"
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <FaLinkedin className="text-2xl text-white" />
            </Link>
          </div>
          <div className="bg-gradient-to-r from-fuchsia-600 to-blue-600 w-10 h-10 rounded-full flex justify-center">
            <Link
              to="https://twitter.com/EmmanuelM199"
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <FaTwitter className="text-2xl text-white" />
            </Link>
          </div>
          <div className="bg-gradient-to-r from-fuchsia-600 to-blue-600 w-10 h-10 rounded-full flex justify-center">
            <Link
              to="https://github.com/EmmanuelMitchell"
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <FaGithub className="text-2xl text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
