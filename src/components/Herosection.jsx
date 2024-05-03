import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function Herosection() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer"],
    loop: 0,
  });
  return (
    <section className=" lg:flex gap-24 items-center justify-center">
      <div className="flex-1">
        <div className="flex flex-col gap-8 py-2">
          <h1 className="lg:text-xl text-gray-800 flex items-center">
            Hi There
            <span className="">
              <img src="/wav-hand.gif" alt="" className="w-8 " />
            </span>
          </h1>
          <p className=" lg:text-4xl flex gap-4 text-gray-700">
            I'm
            <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white p-1 rounded-md uppercase font-extrabold">
              Emmanuel Mitchell
            </span>
          </p>
          <p className="sm:text-xl font-bold  lg:text-6xl text-gray-700 lg:font-thin">
            {text}
          </p>
          <p className="text-gray-700">
            passionate about crafting seamless digital experiences from front to
            back. With expertise in both frontend and backend technologies, I
            thrive in bridging the gap between design and functionality. From
            building responsive user interfaces with <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong> and
            <strong> Reactjs</strong> etc ,to architecting robust server-side
            solutions using frameworks like Node.js and databases like MongoDB
            or SQL, I'm dedicated to delivering scalable, efficient, and
            user-centric applications. Let's collaborate to bring your ideas to
            life in the digital realm!
          </p>
          <div className="flex gap-4 ">
            <button className="border border-blue-600 py-3 px-6 rounded-lg text-blue-600">
              Get In Touch
            </button>
            <button className="bg-gradient-to-r from-fuchsia-600 to-blue-600 py-3 px-6 text-white font-semibold rounded-lg">
              <a href="./public/Profile.pdf" download={true}>
                Download Cv
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="sm: flex justify-center">
          <img
            src="/mitcho-removebg-preview.png"
            alt=""
            className="sm:hidden lg:block object-cover w-fit rounded-t-full "
          />

          <img
            src="/mitcho-removebg-preview.png"
            alt=""
            className="sm:block w-48 text-center lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
