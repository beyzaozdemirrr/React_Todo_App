import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    onAdd(input);      
    setInput('');      
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Yeni görev ekle..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default AddTodo;
