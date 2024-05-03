import React from "react";
import data from "../data/data.json";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="bg-gray-50">
      <div className=" max-w-7xl mx-auto">
        <h2 className="text-slate-500 lg:text-4xl sm:text-sm sm:font-extrabold lg:font-thin uppercase py-2 text-center underline">
          Projects
        </h2>
        <div className="sm:px-4  lg:max-w-4xl mx-auto py-2">
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, numquam? Illum quia nihil corporis et fugiat soluta!
            Eveniet explicabo excepturi assumenda! Facere, corrupti tempora
            recusandae ut quasi minus animi enim.
          </p>
        </div>
        {/* <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        neque quasi sapiente accusantium reprehenderit laboriosam, rerum libero
        soluta. Libero sapiente impedit placeat iusto ad dolor veritatis
        delectus provident pariatur exercitationem.
      </p> */}
        <div className="grid grid-col-1 lg:grid-cols-3 gap-3 p-4">
          {data.portfolio.map((item) => (
            <div className="shadow-md shadow-slate-400 p-5  border-1  border-slate-900 bg-white">
              <Link to={item.id} className="">
                <img src={item.src} alt="" className="object-cover mx-auto" />
                <h4 className="text-slate-600 font-thin text-2xl text-center">
                  {item.title}
                </h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
