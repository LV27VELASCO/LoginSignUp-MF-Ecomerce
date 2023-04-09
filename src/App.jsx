import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Routes,Route} from "react-router-dom";

const App = () => (
  <BrowserRouter>
  <div className="h-screen grid place-content-center">
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
  </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
