import {  Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Create from "./pages/Create";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={ <Landing />}   /> 
          <Route path="/signup" element = { <Signup /> } />
          <Route path="/signin" element = { <Signin /> } />
          <Route path="/blogs" element = { <Blogs /> } />
          <Route path="/blog/:id" element = { <Blog /> } />
          <Route path="/about" element = { <AboutUs /> } />
          <Route path="/create" element = { <Create /> } />
          



        </Routes>
     
  
    </>
  );
}

export default App;
