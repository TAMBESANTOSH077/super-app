import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Page1.css';

const categories = [
  { name: 'Action', color: '#FF4500', img: '/Action.jpeg' },
  { name: 'Drama', color: '#D7A4FF', img: '/Drama.jpeg' },
  { name: 'Romance', color: '#11B800', img: '/Romance.jpeg' },
  { name: 'Thriller', color: '#84C2FF', img: '/Thriller.jpeg' },
  { name: 'Western', color: '#912500', img: '/Western.jpeg' },
  { name: 'Horror', color: '#7358FF', img: '/Horror.jpeg' },
  { name: 'Fantasy', color: '#FF4ADE', img: '/Fantacy.jpeg' },
  { name: 'Music', color: '#E61E32', img: '/Music.jpeg' },
  { name: 'Fiction', color: '#6CE06E', img: '/Fiction.jpeg' },
];

function Page1() {
  const navigate = useNavigate(); 
  const [selected, setSelected] = useState(['Romance', 'Music', 'Action']);

  const toggleCategory = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };


  const handleNext = () => {
    if (selected.length >= 3) {
      navigate('/dashboard');
    } else {
      alert("कृपया किमान ३ कॅटेगरी निवडा!"); 
    }
  };

  return (
    <div className="page-container">
      <div className="left-side">
        <h1 className="logo">Super app</h1>
        <h2 className="heading">Choose your <br/> entertainment <br/> category</h2>
        
        <div className="tags-container">
          {selected.map((item) => (
            <span key={item} className="tag">
              {item} <button onClick={() => toggleCategory(item)}>X</button>
            </span>
          ))}
        </div>
        
        {selected.length < 3 && (
          <p className="warning">
            <span className="error-icon">⚠️</span> Minimum 3 category required
          </p>
        )}
      </div>

      <div className="right-side">
        <div className="grid">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`card ${selected.includes(cat.name) ? 'active' : ''}`}
              style={{ backgroundColor: cat.color }}
              onClick={() => toggleCategory(cat.name)}
            >
              <h3>{cat.name}</h3>
              <img src={cat.img} alt={cat.name} />
            </div>
          ))}
        </div>
      
        <button className="next-btn" onClick={handleNext}>Next Page</button>
      </div>
    </div>
  );
}

export default Page1;