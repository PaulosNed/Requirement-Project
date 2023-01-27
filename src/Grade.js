// import img1 from "./img/image1.jpg"
// import img2 from "./img/image2.jpg"
// import img3 from "./img/image3.jpg"
// import img4 from "./img/image4.jpg"
// import img5 from "./img/image5.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img6 from "./img/image4.jpg"

function Grade() {
    const navigate = useNavigate()
    const [selected, setSelected] = useState("1")
    const selectedClass = "w-14 h-14 bg-cyan-700 text-white rounded-full shadow-sm"
    const unselectedClass = "w-14 h-14 bg-white rounded-full shadow-sm border"
  return (
    <div className="relative min-w-screen min-h-screen">
      <img src={img6} alt="" className="absolute inset-0 w-full h-full blur-sm"/>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute m-auto left-0 right-0 flex items-center justify-center h-full">
        <div
          className="relative flex flex-col m-6 space-y-10 mt-12 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
        >
          <div className="p-12">
            <p>Grade: </p>
            <div
              className="w-full grid grid-cols-4 gap-4 mb-6 mt-2"
              >
                <button className={selected === "1" ? selectedClass : unselectedClass} onClick={() => setSelected("1")}>1</button>
                <button className={selected === "2" ? selectedClass : unselectedClass} onClick={() => setSelected("2")}>2</button>
                <button className={selected === "3" ? selectedClass : unselectedClass} onClick={() => setSelected("3")}>3</button>
                <button className={selected === "4" ? selectedClass : unselectedClass} onClick={() => setSelected("4")}>4</button>
                <button className={selected === "5" ? selectedClass : unselectedClass} onClick={() => setSelected("5")}>5</button>
                <button className={selected === "6" ? selectedClass : unselectedClass} onClick={() => setSelected("6")}>6</button>
                <button className={selected === "7" ? selectedClass : unselectedClass} onClick={() => setSelected("7")}>7</button>
                <button className={selected === "8" ? selectedClass : unselectedClass} onClick={() => setSelected("8")}>8</button>
                <button className={selected === "9" ? selectedClass : unselectedClass} onClick={() => setSelected("9")}>9</button>
                <button className={selected === "10" ? selectedClass : unselectedClass} onClick={() => setSelected("10")}>10</button>
                <button className={selected === "11S" ? selectedClass : unselectedClass} onClick={() => setSelected("11S")}>11S</button>
                <button className={selected === "11N" ? selectedClass : unselectedClass} onClick={() => setSelected("11N")}>11N</button>
                <button className={selected === "12S" ? selectedClass : unselectedClass} onClick={() => setSelected("12S")}>12S</button>
                <button className={selected === "12N" ? selectedClass : unselectedClass} onClick={() => setSelected("12N")}>12N</button>
              </div>
            <div
              className="flex flex-col items-center w-full justify-end gap-6 mt-6 space-y-6 md:flex-row md:space-y-0"
            >
              <button
                className="w-full md:w-auto flex justify-center items-center px-4 py-2 space-x-4 font-sans font-bold text-white rounded-md bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                onClick={()=>navigate("/")}
              >
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grade;
