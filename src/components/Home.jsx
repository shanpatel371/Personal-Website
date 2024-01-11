import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-blue-900'>
      Home
      {/* Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Shan Patel</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a 2nd year computer science student</h2>
        <p className="text-[#8892b0] py-10 max-w-[700px]">
          I am a second-year Computer Science student at Georgia Tech,
          specializing in intelligence and information management. My passion
          lies in exploring innovative solutions to real-world challenges at the
          cutting edge of technology. Currently, I am dedicated to honing my
          skills in web development while gaining valuable experience in various
          iOS and Android frameworks.
        </p>
        {/* <div>
          <button className="text-white border-4 px-4 py-2 flex items-center hover:bg-black hover:border-black">
            <div className="px-1">View Work</div>
            <HiArrowNarrowRight /> 
            // Sorry, the button doesn't work. I am still working on a page for this button.
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
