import React from 'react';
import { pricingOptions } from '../constants';
import { CheckCircle2 } from 'lucide-react';

function Price() {
  return (
    <div className="mt-20">
      {/* Pricing Header */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-7xl mx-auto">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-full lg:w-1/3 p-6 border border-neutral-700 rounded-xl"
          >
            <div className="text-center">
              {/* Plan Title */}
              <p className="text-4xl font-bold mb-8">
                {option.title}
                {option.title === 'Pro' && (
                  <span className="text-xl ml-2 text-purple-600">
                    (Most Popular)
                  </span>
                )}
              </p>

              {/* Plan Price */}
              <p className="mb-8">
                <span className="text-5xl font-semibold">{option.price}</span>
                <span className="text-neutral-500 tracking-tight ml-2">/Month</span>
              </p>

              {/* Plan Features */}
              <ul className="text-left text-neutral-600">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 text-lg hover:bg-purple-950 font-medium border border-purple-700 rounded-lg"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
