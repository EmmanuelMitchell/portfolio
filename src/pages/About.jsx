import React from "react";
import { IoCodeSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGit } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiPrisma } from "react-icons/si";

export default function About() {
  return (
    <div className="">
      {/* <div className="bg-gradient-to-r from-violet-400 to-indigo-300 text-white py-32 rounded-lg"> */}
      <div className="sm:hidden lg:block bg-white shadow-md py-20 rounded-bl-full rounded-br-full">
        <div className="flex justify-center items-center gap-2">
          <IoCodeSharp className="text-7xl" />
          <h2 className="bg-gradient-to-r from-fuchsia-600  to-blue-600 inline-block text-transparent bg-clip-text text-4xl">
            About Me
          </h2>
          <IoCodeSlash className="text-7xl" />
        </div>
      </div>
      {/* Small Screen Size */}
      <div className="flex justify-center items-center gap-2 py-10 lg:hidden">
        <IoCodeSharp className="text-7xl" />
        <h2 className="bg-gradient-to-r from-fuchsia-600  to-blue-600 inline-block text-transparent bg-clip-text text-4xl">
          About Me
        </h2>
        <IoCodeSlash className="text-7xl" />
      </div>
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-64">
          <img
            src="mitcho-removebg-preview.png"
            alt=""
            className="sm:hidden lg:block object-cover w-fit h-80 rounded-t-full "
          />

          <div className="sm:px-6 lg:py-5">
            {/* <h4 className="">About</h4> */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo ullam mollitia ex delectus rem qui reiciendis labore
              modi, quam voluptas odit quo repellat praesentium officia
              doloremque, voluptates expedita facilis? Quibusdam. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Natus facere ducimus
              exercitationem ut nostrum dolor dolore ex eius reprehenderit,
              earum praesentium mollitia quasi consectetur sit ipsam, eligendi
              accusantium est unde? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Est quas voluptates, delectus accusamus libero
              dolor suscipit assumenda animi ducimus eius illum consectetur
              voluptatibus at magnam laudantium, rerum labore sint. Repudiandae.
            </p>
            <div className="my-4">
              <h2 className="bg-gradient-to-r from-fuchsia-600  to-blue-600 inline-block text-transparent bg-clip-text text-4xl  font-mono">
                Skills
              </h2>
              <div className="grid grid-cols-4 gap-2 py-10">
                <IoLogoHtml5 className="text-7xl text-[#E34F26]" />
                <FaCss3 className=" text-7xl text-[#1572B6]" />
                <SiTailwindcss className="text-7xl text-[#06B6D4]" />
                <IoLogoJavascript className="text-7xl text-[#F7DF1E]" />
                <GrReactjs className="text-7xl text-[#0088CC]" />
                <TbBrandNextjs className="text-7xl text-[#000000]" />
                <FaGit className="text-7xl text-[#F05032]" />
                <DiMongodb className="text-7xl text-[#47A248]" />
                <SiMysql className="text-7xl text-[#4479A1]" />
                <BsFiletypeSql className="text-7xl text-[#003B57]" />
                <SiPrisma className="text-7xl text-[#2D3748]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
