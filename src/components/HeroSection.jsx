import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-3 lg:mt-10 px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Vikram Ranjan
        <span className="bg-gradient-to-r from-purple-500 to-blue-950 text-transparent bg-clip-text">
          {" "}
          Developer
        </span>
      </h1>
      <p className="mt-8 text-lg text-center text-neutral-500 max-w-2xl">
        Passionate B.Tech student specializing in Artificial Intelligence and Data Science. Skilled in front-end development, machine learning, and web technologies, Vikram enjoys building dynamic, visually appealing web interfaces and solving complex challenges.
      </p>
      <div className="flex justify-center my-8 space-x-4">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-blue-950 text-white py-3 px-6 rounded-md transition duration-300 hover:opacity-80"
        >
          Know More
        </a>
        <a
          href="#"
          className="border border-purple-500 text-purple-500 py-3 px-6 rounded-md transition duration-300 hover:bg-purple-500 hover:text-white"
        >
          About
        </a>
      </div>
      <div className="flex flex-col lg:flex-row justify-center my-10 space-x-0 lg:space-x-4">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-blue-300 shadow-lg"
          src={video1}
        ></video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-blue-300 shadow-lg"
          src={video2}
        ></video>
      </div>
    </div>
  );
}

export default HeroSection;
