import React from 'react'
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from './components/news/News';


export default function App() {
  return (
    <>
    <Router>

    <Navbar></Navbar>
     <Routes>
      <Route exact path="/" element={<News category="WORLD" country="in" ></News>} ></Route>
      <Route exact path="/SCIENCE" element={<News country="in" category="SCIENCE" ></News>} ></Route>
      <Route exact path="/HEALTH" element={<News country="in" category="HEALTH" ></News>} ></Route>
      <Route exact path="/BUSINESS" element={<News country="in" category="BUSINESS" ></News>} ></Route>
      <Route exact path="/TECHNOLOGY" element={<News country="in" category="TECHNOLOGY" ></News>} ></Route>
      <Route exact path="/SPORTS" element={<News country="in" category="SPORTS" ></News>} ></Route>
      <Route exact path="/ENTERTAINMENT" element={<News country="in" category="ENTERTAINMENT" ></News>} ></Route>
     </Routes>
    </Router>
  
    </>
  )
}
