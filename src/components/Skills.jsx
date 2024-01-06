import React from "react";

import HTMl from "../assets/html.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";

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
            <img className="w-20 mx-auto" src={HTMl} alt="HTML icons" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React icons" />
            <p>React</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={node} alt="HTML icons" />
            <p>Javascript</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={firebase} alt="HTML icons" />
            <p>Firebase</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icons" />
            <p>tailwind</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-150 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML icons" />
            <p>CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
