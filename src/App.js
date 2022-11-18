import headset from "./img/headphone.png"
import heart from "./img/heart.png"
import weight from "./img/weight.png"

function App() {
  
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-2xl p-2 md:p-14 flex flex-col md:flex-row gap-4 pb-6">
        <div className="my-4">
          <img src={headset} alt="" className="w-fit mx-auto h-48 rounded-2xl transform hover:scale-105 duration-200"/>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="bg-black text-white rounded-2xl px-3 py-1 text-sm">Free Shipping</div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl font-bold">Razen Kracken Kitty Edt Gaming</p>
            <p className="text-xl font-bold">Headset Quartz</p>
          </div>
          <p className="text-xs font-medium"><s>$799</s></p>
          <p className="text-2xl font-bold">$599</p>
          <p className="text-slate-400 text-xs">This offer is valid until April 3rd or as long as stock lasts!</p>
          <button className="my-2 bg-blue-500 border-b-8 border-b-blue-800 w-full py-2 text-center text-white text-sm transform hover:border-b-0 hover:py-3 hover:bg-blue-800 rounded-lg duration-150">Add to Cart</button>
          <div className="w-full flex gap-2 items-center my-2 group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
            <p className="text-xs">50+ pcs, in stock</p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2">
            <button className="w-full outline outline-1 outline-slate-400 py-2 rounded-lg flex items-center justify-center gap-2 md:gap-1 text-sm font-medium hover:-translate-y-0.5 hover:shadow-lg hover:bg-opacity-20 transition-all duration-200">
              <img src={weight} alt="" className="w-6"/>
              <p>Add to Cart</p>
            </button>
            <button className="w-full outline outline-1 outline-slate-400 py-2 rounded-lg flex items-center justify-center gap-2 md:gap-1 text-sm font-medium hover:-translate-y-0.5 hover:shadow-lg hover:bg-opacity-20 transition-all duration-200">
              <img src={heart} alt="" className="w-6"/>
              <p>Add to Wishlist</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
