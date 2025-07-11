import React, { useState } from 'react';

function Editing({ initialValue, onUpdate, onCancel, id }) {
  const [yeniMetin, setYeniMetin] = useState(initialValue);

  const handleChange = (e) => {
    setYeniMetin(e.target.value);
  };

  return (
    <div style={{ 
      flex: 1, 
      display: "flex", 
      alignItems: "center", 
      gap: "10px" 
    }}>
      <input
        type="text"
        value={yeniMetin}
        onChange={handleChange}
        style={{
          flex: 1,
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}
      />
      <button onClick={() => onUpdate(id, yeniMetin)}>Kaydet</button>
      <button onClick={() => onCancel(id)}>İptal</button>
    </div>
  );
}

export default Editing;
