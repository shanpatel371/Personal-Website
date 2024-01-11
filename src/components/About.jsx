import React from "react";
import Photo from "../assets/Shan_photo1.jpg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-1 gap-8">
          <div className="sm: text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-10 px-4">
            <div className="mx-auto flex">
              <img src={Photo} alt="Me" style={{ width: "270px" }} />
            </div>
            <div className="text-2xl flex items-center justify-center">
              <p>
              This marks my initial venture into React, where I am actively exploring its functions and learning new concepts. 
              I plan to continuously update this website as I delve deeper into React, introducing exciting features as
              I discover them. 
              </p>
            </div>
            <div className="text-base">
                <p>
                Some of my hobbies include working out, playing video games, and, of course, coding. I aim to hit the gym at least
                five times a week, though realistically, it tends to be around three times. Last summer, I dabbled in bouldering 
                and am eager to pick it up again this year. I occasionally enjoy playing video games, like the OG Fortnite session 
                I had with my friends over the winter break, which was a lot of fun. Coding has been a passion of mine since junior year in high school, 
                and I've been continuously expanding my knowledge by exploring new languages and frameworks.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
