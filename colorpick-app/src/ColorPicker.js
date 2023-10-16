import React, { useState } from 'react';

const ColorPicker = () => {
  const colors = ['pink', 'blue', 'yellow', 'orange', 'green', 'grey', 'black', 'white', 'brown','red','purple','orange'];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleCustomColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Color Picker</h2>
      <div style={{ backgroundColor: '#FFB6C1', padding: '20px' }}>
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color, padding: '10px', margin: '5px', border: 'none', cursor: 'pointer' }}
            onClick={() => handleColorClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Color:</h3>
        <div style={{ backgroundColor: selectedColor || '#FFB6C1', width: '50px', height: '50px', border: '1px solid #000' }}></div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Custom Color Picker:</h3>
        <input type="color" value={selectedColor || '#FFB6C1'} onChange={handleCustomColorChange} />
      </div>
    </div>
  );
};

export default ColorPicker;
