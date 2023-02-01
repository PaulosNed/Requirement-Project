// import img1 from "./img/image1.jpg"
// import img2 from "./img/image2.jpg"
// import img3 from "./img/image3.jpg"
// import img4 from "./img/image4.jpg"
// import img5 from "./img/image5.jpg"
import { useNavigate } from "react-router-dom";
import img6 from "./img/image1.jpg"

function RegisterStudent() {
    const navigate = useNavigate()
  return (
    <div class="flex items-center justify-center min-h-screen bg-slate-100">
      <div
        class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
      >
        <div class="p-6 md:p-20">
          <h2 class="font-mono mb-5 text-4xl font-bold">Register Student</h2>
          <p class="max-w-sm mb-3 font-sans font-light text-gray-600 text-sm">
            Please fill out your details
          </p>
          <input
            type="text"
            class="w-full block my-4 mt-1 px-4 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Name"
          />
          <input
            type="email"
            class="w-full block my-4 mt-1 px-4 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Email"
          />
          <input
            type="text"
            class="w-full block my-4 mt-1 px-4 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Phone Number"
          />
          <input
            type="text"
            class="w-full block my-4 mt-1 px-4 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Gender"
          />
          <input
            type="text"
            class="w-full block my-4 mt-1 px-4 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Date of Birth"
          />
          {/* <input
            type="text"
            class="w-full block my-4 mt-1 px-4 py-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Add Field"
          /> */}

          <div
            class="flex flex-col items-center w-full justify-end gap-6 mt-6 space-y-6 md:flex-row md:space-y-0"
          >
            <button
              class="w-full md:w-auto flex justify-center items-center px-4 py-2 space-x-4 font-sans font-bold text-white rounded-md bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
              onClick={() => navigate("/grade")}
            >
              <span>Register</span>
            </button>
          </div>
          
        </div>
        <div class="relative w-[400px] hidden md:block rounded-r-xl">
          <img src={img6} alt="" class="h-full rounded-r-xl" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-r-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterStudent;
