import image6 from "./img/img6.jpg";

function App() {
  
  return (
    <div className="h-screen bg-black/80 flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-black/40 text-white flex flex-col md:flex-row rounded-lg items-center">
        <div className="md:p-3">
          <img src={image6} alt="plant" className="w-full md:w-64 my-3 md:my-0 h-64 rounded-l-lg transform hover:scale-110 hover:rounded-lg duration-300"/>
        </div>

        <div className="mx-auto flex flex-col gap-4 px-8 font-serif">
          <h1 className="text-2xl">Get diet and fitness tips in your inbox</h1>
          <p className="text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, reprehenderit!</p>
          <div className="flex flex-col md:flex-row gap-4 my-5">
            <input type="text" placeholder="Enter your email address" className="border border-white/20 bg-black/20 w-full text-white py-2 px-5 focus:outline-none"/>
            <button type="submit" className="bg-green-600 rounded-lg px-5 h-12">Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
