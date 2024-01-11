import React from "react";

import python from "../assets/python.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import c from "../assets/c++.png";
import git from "../assets/github.png";
import swift from "../assets/swift.png";
import java from "../assets/java.png";

const Skills = () => {
  return (
    <div id='skills' name="skills" className="w-full h-screen bg-[#0a192f] text-gray-200">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">This are the languages I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={java} alt="HTML icons" />
            <p>Java</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React icons" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={swift} alt="HTML icons" />
            <p>Swift</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={python} alt="HTML icons" />
            <p>Python</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={git} alt="HTML icons" />
            <p>Git</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={c} alt="HTML icons" />
            <p>C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
