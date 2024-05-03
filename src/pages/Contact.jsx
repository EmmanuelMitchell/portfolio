import React from "react";

export default function Contact() {
  return (
    <div className=" bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className=" my-3">
          <h2 className="sm:text-xl text-center lg:text-7xl text-blue-900 font-mono">
            Contact
          </h2>
          <p className="sm:text-sm lg:uppercase text-center text-slate-500 text-xl">
            I'LL Be Glad To Answer Your Question
          </p>
        </div>
        <div className=" lg:flex flex-col justify-center items-center max-w-3xl mx-auto">
          <form className="sm:px-3 lg:flex flex-col p-10">
            <div className="bg-white shadow-sm p-8">
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className=" lg:px-16 py-3 rounded-md outline-none border-2 border-blue-900 text-xl"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Email address"
                  name="email"
                  className=" lg:px-16 py-3 rounded-md outline-none border-2 border-blue-900 text-xl"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className=" lg:px-16 py-3 rounded-md outline-none border-2 border-blue-900 text-xl"
                />
              </div>
              <div className="py-2">
                <textarea
                  placeholder="Your Mitchell"
                  className=" lg:px-20  py-10 rounded-md outline-none border-2 border-blue-900 text-xl"
                ></textarea>
              </div>
              <div className="py-2">
                <button className="border-2 border-blue-800 bg-white py-3 px-6 text-blue-600 font-mono rounded-lg">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
