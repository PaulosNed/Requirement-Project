import warning from "./img/warning.svg";

function App() {
  
  return (
    // <div className="flex max-w-sm p-6 mx-auto rounded-xl shadow-xl bg-white mt-12 space-x-4">
    //   <img src={warning} className="w-12 h-12" alt="not" />
    //   <div>
    //     <p className="text-xl font-medium text-black">Are You sure?</p>
    //     <p className="text-slate-500">You are about to delete a post</p>
    //   </div>
    // </div>
    <div className="h-screen p-4 flex flex-col">
      <header className="flex-none flex flex-col md:flex-row justify-around items-end">
        <div className="text-3xl mx-auto">APP NAME</div>
        <nav className="flex text-xl gap-3 mx-auto">
          <p href="">home</p>
          <p href="">about</p>
          <p href="">Contact</p>
        </nav>
      </header>
      <main className="flex-auto h-52"></main>
      <footer className="flex-none">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <p className="text-md">Copyright 2021.</p>
            <img src={warning} className="flex-none w-12 h-12" alt="not" />
            <p className="text-md">bye</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
