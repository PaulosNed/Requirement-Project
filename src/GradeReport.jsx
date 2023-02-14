import React from "react";
import img from './img/back.png'

function FillMark() {
  return (
    <div className="mix-blend-multiply bg-blue-400">

    <div className="bg-cover bg-center h-screen p-9 px-8 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${img})` }}>
      <div className=" flex-row justify-center  items-center basis-1/4 p-8 bg-transparent shadow-black shadow-lg rounded-lg shadow-md m-20 w-1/2">
        <h2 className="text-xl font-bold mb-4 text-white">Grade Report</h2>
        <div className="flex flex-wrap flex-col basis-1/2 ">
          <p className="basis-5">Physics <span>98</span></p>
          <p className="basis-5">Physics <span>98</span></p>
          <p className="basis-5">Physics <span>98</span></p>
          <p className="basis-5">Physics <span>98</span></p>
          <p className="basis-5">Physics <span>98</span></p>
          <p className="basis-5">Physics <span>98</span></p>
          <p className="basis-5">Physics <span>98</span></p>
          <p className="basis-5">Physics <span>98</span></p>
        </div>
        <div className=" flex flex-row justify-center items-center">
            <p className="basis-1/3 text-white text-lg">Conduct - A</p>
            <p className="basis-1/3 text-white text-lg">Avg - 76%</p>
            <p className="basis-1/3 text-white text-lg">Rank - 13</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FillMark;
