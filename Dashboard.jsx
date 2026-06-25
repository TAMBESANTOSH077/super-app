import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      
      <div className="left-column">
      
        <div className="profile-card">
          <img src="/vinay2.jpeg" alt="Profile" className="profile-img" />
          <div className="profile-info">
            <h2>KK Vinay</h2>
            <p>Vinay090@gmail.com</p>
            <h3>vinay060</h3>
            <div className="tags">
              <span>Horror</span> <span>Thriller</span>
              <span>Action</span> <span>Fiction</span>
            </div>
          </div>
        </div>

       
        <div className="weather-card">
          <div className="date-time">2-20-2023 | 07:35 PM</div>
          <div className="weather-details">
            <div>☁️ Heavy rain</div>
            <div>🌡️ 24°C</div>
            <div>💨 3.7 km/h Wind</div>
            <div>💧 83% Humidity</div>
          </div>
        </div>
      </div>

     
      <div className="news-card">
        <img src="/sky.jpeg" alt="Everest" className="news-img" />
        <div className="news-content">
          <h2>Want to climb Mount Everest?</h2>
          <p>2-20-2023 | 07:35 PM</p>
          <p>In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world's highest mountain has changed dramatically...</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;