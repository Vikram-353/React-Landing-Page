import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide font-bold">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-purple-500 to-blue-950 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row mt-12 gap-12 justify-center items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={codeImg}
            alt="Coding"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Checklist Section */}
        <div className="w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start mb-10">
              {/* Icon */}
              <div className="text-green-400 flex-shrink-0 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>

              {/* Text */}
              <div className="ml-6">
                <h5 className="text-xl font-semibold mb-2 text-neutral-100">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
