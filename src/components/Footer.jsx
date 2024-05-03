import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <section class="py-12 bg-gradient-to-r from-fuchsia-600 to-blue-600">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div class="xl:flex xl:items-center xl:justify-start">
              <img
                class="w-auto mx-auto h-16 rounded-full"
                src="./public/MitchLogo.png"
                alt=""
              />

              <p class="mt-5 text-sm text-white xl:ml-6 xl:mt-0">
                © Copyright 2024 Mitche-Tech
              </p>
            </div>

            <div class="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
              <ul class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                <li>
                  <a
                    href="#"
                    title=""
                    class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    class="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>

              <div class="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

              <ul class="flex items-center justify-center space-x-8 xl:justify-end">
                <li>
                  <a
                    href="#"
                    title=""
                    class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <Link
                      to="https://www.linkedin.com/in/emmanuel-mitchell-b12337244/"
                      target="_blank"
                      className="flex flex-col justify-center items-center"
                    >
                      <FaLinkedin className="text-2xl text-white" />
                    </Link>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/EmmanuelM199"
                    target="_blank"
                    title=""
                    class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <Link
                      to="https://twitter.com/EmmanuelM199"
                      target="_blank"
                      className="flex flex-col justify-center items-center"
                    >
                      <FaTwitter className="text-2xl text-white" />
                    </Link>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                  >
                    <Link
                      to="https://github.com/EmmanuelMitchell"
                      target="_blank"
                      className="flex flex-col justify-center items-center"
                    >
                      <FaGithub className="text-2xl text-white" />
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
