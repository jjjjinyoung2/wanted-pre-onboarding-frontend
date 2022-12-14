// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Member/Login";
import SignUp from "./pages/Member/SignUp";
import Todo from "./pages/Main/Todo";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
