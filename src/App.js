import React from 'react';
import './App.css';
import "./Components/Routes/pages.css"
import { ApplicationRoutes } from "./ApplicationRoutes";
import { NavBarComponent } from "./Components/NavBarComponent/NavBarComponent";

function App() {
  return (
    <>
      <NavBarComponent />
      <ApplicationRoutes />
    </>
  );
}

export default App;
