import React from 'react';
import { features } from "../constants";

function Features() {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className="text-center">
        <span className='bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
          Key Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide">
          Seamlessly create
          <span className="bg-gradient-to-r from-purple-500 to-blue-950 text-transparent bg-clip-text">
            {" "}your ideal website
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-12">
            <div className="flex">
              <div className="h-12 w-12 p-2 bg-neutral-900 text-purple-500 flex justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="mt-1 mb-2 text-xl font-semibold text-white">{feature.text}</h5>
                <p className='text-md text-neutral-400'>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
