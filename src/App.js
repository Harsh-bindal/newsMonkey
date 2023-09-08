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
      <Route exact path="/" element={<News country="in" category="world" ></News>} ></Route>
      <Route exact path="/science" element={<News country="in" category="science_and_technology" ></News>} ></Route>
      <Route exact path="/education" element={<News country="in" category="education" ></News>} ></Route>
      <Route exact path="/health" element={<News country="in" category="health" ></News>} ></Route>
      <Route exact path="/travel" element={<News country="in" category="travel" ></News>} ></Route>
      <Route exact path="/sport" element={<News country="in" category="sport" ></News>} ></Route>
      <Route exact path="/entertainment" element={<News country="in" category="entertainment" ></News>} ></Route>
     </Routes>
    </Router>
  
    </>
  )
}
