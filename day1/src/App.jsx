import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a = "Write your name";
  let arr = [1,2,3,4,5];
  let obj = {"brand":"Lenovo","product":"laptop"};
  let arrObj = [
    { id: 1, team: "A", Place: "W" },
    { id: 2, team: "B", Place: "X" },
    { id: 3, team: "C", Place: "Y" },
    { id: 4, team: "D", Place: "Z" }
  ]
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Exercise 1</h1>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Banner</h2>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <p>card 1 - {a}</p>
        </div>
        <div className="card">
          <p>card 2 arr={arr}</p>
        </div>
        <div className="card">
          <p>card 3 obj={obj.product}</p>
        </div>
        <div className="card">
          <p>card 4 {arrObj[3].team} </p>
        </div>
      </section>
    </div>
  );
}

export default App;
