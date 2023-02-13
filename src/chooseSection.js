import React from "react";
import NavBar from './components/navbar';

function SelectPage() {
  return (
    <div>
      <NavBar />
    
    <div className=" h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-10 bg-gray-200 rounded-lg shadow-lg">
        <div className="text-4xl font-bold text-center">Welcome Mr' Henok S.</div>
        <div className="text-3xl font-semibold text-center">Choose section to fill marklist</div>
        <div className="grid grid-cols-3 gap-4 mt-10 ">
          <button className="bg-slate-100 hover:bg-blue-700 text-black py-5 px-4 m-4 rounded-lg">
             7c
          </button>
          <button className="bg-slate-100 hover:bg-blue-700 text-black py-5 px-4 m-4 rounded-lg">
           8d
          </button>
          <button className="bg-slate-100 hover:bg-blue-700 text-black py-5 px-4 m-4 rounded-lg">
            5a
          </button>
          <button className="bg-slate-100 hover:bg-blue-700 text-black py-5 px-4 m-4 rounded-lg">
            12k
          </button>
          <button className="bg-slate-100 hover:bg-blue-700 text-black py-5 px-4 m-4 rounded-lg">
            6b
          </button>

        </div>
      </div>
    </div>
    </div>
  );
}

export default SelectPage;

