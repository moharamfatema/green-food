import React from "react";
import "./App.css";
import Navigaton from "./components/Navigaton";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/homepage";
import RecipePage from "./OpenRecipeComponents/RecipePage";
import SignUp from "./ProfileComponents/SignUp";
import Login from "./ProfileComponents/Login";
import Profile from "./ProfileComponents/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/green-food">
        <Navigaton />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe" element={<RecipePage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
