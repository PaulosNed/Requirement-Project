import React from 'react';
import Vision from '../components/Vision';
import Image1 from '../img/back.png';

const LandingPage = () => (
  <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Image1})` }}>
    <div className="container mx-auto h-full">
      <div className="flex flex-col lg:flex-row items-center h-full py-20">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-9xl font-bold mb-10 text-white">L.C.C.S</h1>
          <p className="text-4xl font-semibold mb-10 text-white">
            Striving for Excellence
          </p>
          <p className=" text-sm mb-10 text-white">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="lg:w-1/3">
          <form>
            <div className="mb-10">
              <label className="block text-white font-medium mb-2" htmlFor="email">
                Email address
              </label>
              <input className="border rounded-2xl border-gray-500 p-2 w-full " type="email" id="email" />
            </div>
            <div className="mb-10">
              <label className="block text-white font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input className="border rounded-2xl p-2 w-full" type="password" id="password" />
            </div>
            <button className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-7">
              Forget Password
            </button>
            <button className="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
    <Vision/>
  </div>
);

export default LandingPage;
