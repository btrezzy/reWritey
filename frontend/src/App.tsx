import {  Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={ <Landing />}   /> 
          <Route path="/signup" element = { <Signup /> } />
          <Route path="/signin" element = { <Signin /> } />
          <Route path="/blogs" element = { <Blogs /> } />
          <Route path="/blog:id" element = { <Signin /> } />


        </Routes>
     
  
    </>
  );
}

export default App;
