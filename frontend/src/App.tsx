import {  Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={ <Landing />}   /> 
          <Route path="/signup" element = { <Signup /> } />
          <Route path="/signin" element = { <Signin /> } />

        </Routes>
     
  
    </>
  );
}

export default App;