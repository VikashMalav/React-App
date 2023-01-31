import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import Notfound from "./Notfound";
import BlogLayout from './BlogLayout'
import SingleBlog from "./SingleBlog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/blog" element={<BlogLayout />}>
              <Route index element={<Blog />}></Route>
              <Route path="/blog/:id" element={<SingleBlog />}></Route>
            </Route>
          </Route>
            <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;