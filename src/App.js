import img1 from "./img/image1.jpg"
import img2 from "./img/image2.jpg"
import img3 from "./img/image3.jpg"
import img4 from "./img/image4.jpg"
import img5 from "./img/image5.jpg"
import img6 from "./img/image6.jpg"

function App() {
  return (
    <div className="bg-green-50 w-full px-20 md:px-3 py-2">
      <div className="w-86 md:w-full bg-white shadow-lg flex flex-col items-center gap-10 mx-auto rounded-3xl p-5 md:py-36 md:px-40">
        <nav className="w-full flex flex-col md:flex-row md:justify-end items-center space-y-1 md:gap-8">
          <div className="border-b-2 border-white py-2 transform hover:border-black cursor-pointer duration-500">Vector</div>
          <div className="border-b-2 border-white py-2 transform hover:border-black cursor-pointer duration-500">Illustrations</div>
          <div className="border-b-2 border-white py-2 transform hover:border-black cursor-pointer duration-500">Images</div>
          <div className="border-b-2 border-white py-2 transform hover:border-black cursor-pointer duration-500">Icons</div>
        </nav>
        <div className="flex flex-col gap-10">
          <div className="md:pt-14 w-full flex flex-col md:flex-row md:justify-between gap-5">
            <div className="border-b-2 w-full md:max-w-sm border-zinc-200 flex justify-between md:py-2">
              <input type="text" className="py-1 bg-white text-zinc-200 pl-6 active:border-none font-light" placeholder="Search"/>
              <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
            </div>
            <button className="w-full md:w-44 bg-black text-white text-lg rounded-md hover:outline hover:outline-1 hover:outline-black hover:bg-white hover:text-black py-3.5 duration-150">Upload</button>
          </div>
          <div className="w-full grid gap-4 md:grid-cols-3">
            <div className="relative group">
              <img src={img1} alt="" className="w-full h-full"/>
              <div className="hidden group-hover:inline-block absolute bottom-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-40 group-hover:text-white">
                <div className="w-full flex justify-between items-end px-4 py-2">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 shares</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={img2} alt="" className="w-full h-full"/>
              <div className="hidden group-hover:inline-block absolute bottom-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-40 group-hover:text-white">
                <div className="w-full flex justify-between items-end px-4 py-2">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 shares</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={img3} alt="" className="w-full h-full"/>
              <div className="hidden group-hover:inline-block absolute bottom-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-40 group-hover:text-white">
                <div className="w-full flex justify-between items-end px-4 py-2">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 shares</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={img4} alt="" className="w-full h-full"/>
              <div className="hidden group-hover:inline-block absolute bottom-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-40 group-hover:text-white">
                <div className="w-full flex justify-between items-end px-4 py-2">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 shares</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={img5} alt="" className="w-full h-full"/>
              <div className="hidden group-hover:inline-block absolute bottom-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-40 group-hover:text-white">
                <div className="w-full flex justify-between items-end px-4 py-2">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 shares</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src={img6} alt="" className="w-full h-full"/>
              <div className="hidden group-hover:inline-block absolute bottom-0 w-full bg-black bg-opacity-0 group-hover:bg-opacity-40 group-hover:text-white">
                <div className="w-full flex justify-between items-end px-4 py-2">
                  <div className="flex flex-col justify-end">
                    <p className="text-sm">Abstract Painting</p>
                    <p className="text-xs">245 likes - 35 shares</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
