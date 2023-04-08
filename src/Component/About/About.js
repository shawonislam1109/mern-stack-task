import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="w-9/12 mx-auto ">
      <div className="hero min-h-screen coverFood  mb-4 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
          <h1 className='text-5xl font-bold text-red-500'>Easy Food</h1>
                    <p className="text-3xl font-bold ">The Home of quality home coking!</p>
                    <p className="border-4 my-5 border-red-500"></p>
                    <p className=" font-semibold mb-5 text-slate-600">Find all your favourite recipes, tried and tested for you in your test kitchen plus step-by-step videos, healthy eating tips and top ....</p>
            <button className="btn btn-error text-white">Started now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
