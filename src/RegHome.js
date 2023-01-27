import { useNavigate } from "react-router-dom"
import img6 from "./img/image1.jpg"

function RegHome() {
    const navigate = useNavigate()
  return (
    <div className="relative min-w-screen min-h-screen">
      <img src={img6} alt="" className="absolute inset-0 w-full h-full blur-sm"/>
      <div className="absolute inset-0 bg-black/60"></div>
      <div class="absolute m-auto left-0 right-0 flex items-center justify-center h-full">
        <div
          class="relative flex flex-col m-6 space-y-10 mt-12 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0"
        >
          <div class="p-12">
            <button className="bg-black text-white block w-full my-2 py-2 px-4 rounded-xl shadow-xl hover:scale-105 duration-200" onClick={() => navigate("/regStudent")}>Register Student</button>
            <button className="bg-black text-white block w-full my-2 py-2 px-4 rounded-xl shadow-xl hover:scale-105 duration-200" onClick={() => navigate("/regTeacher")}>Register Teacher</button>
            <div
              class="flex flex-col items-center w-full justify-end gap-6 mt-6 space-y-6 md:flex-row md:space-y-0"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegHome