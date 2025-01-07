import React from 'react';
import './Home.css';
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Tutors from '../../Components/Tutors/Tutors.jsx';

function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-content">
        <Tutors />
      </div>
    </div>
  );
}

export default Home;
