import React from 'react';
import Editing from './Editing';

function Todo({ id, todo, isEditing, completed, onEdit, onDelete, onUpdate, onCancel, onComplete }) {
  if (isEditing) {
    return (
      <Editing
        id={id}
        initialValue={todo}
        onUpdate={onUpdate}
        onCancel={onCancel}
      />
    );
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        opacity: completed ? 0.6 : 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input type="checkbox" checked={completed} onChange={onComplete} />
        <span style={{
          textDecoration: completed ? "line-through" : "none"
        }}>{todo}</span>
      </div>

      
      {!completed && (
        <div style={{ display: "flex", gap: "5px" }}>
          <button onClick={onEdit}>Düzenle</button>
          <button onClick={onDelete}>Sil</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
