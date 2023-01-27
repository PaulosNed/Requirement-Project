import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssignToGrade from "./AssignToGrade";
import Grade from "./Grade";
import RegHome from "./RegHome";
import RegisterStudent from "./RegisterStudent";
import RegisterTeacher from "./RegisterTeacher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegHome />}/>
          <Route path="/regTeacher" element={<RegisterTeacher />}/>
          <Route path="/regStudent" element={<RegisterStudent />}/>
          <Route path="/grade" element={<Grade />}/>
          <Route path="/assignToGrade" element={<AssignToGrade />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
