import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Editing from './components/Editing';
import AddTodo from './components/AddTodo'; 


function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "React öğrenilecek", isEditing: false, completed: false },
    { id: 2, todo: "Uygulama yapılacak", isEditing: false, completed: false },
  ]);

  const TodoEkle = (metin) => {
    const yeniTodo = {
      id: Date.now(),
      todo: metin,
      isEditing: false,
      completed: false
    };
    setTodos([...todos, yeniTodo]);
  };

  const TodoSil = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const TodoEditModuAc = (id) => {
    setTodos(todos.map(item =>
      item.id === id ? { ...item, isEditing: true } : item
    ));
  };

  const TodoEditVazgec = (id) => {
    setTodos(todos.map(item =>
      item.id === id ? { ...item, isEditing: false } : item
    ));
  };

  const TodoGuncelle = (id, yeniMetin) => {
    setTodos(todos.map(item =>
      item.id === id ? { ...item, todo: yeniMetin, isEditing: false } : item
    ));
  };

  const TodoTamamla = (id) => {
    setTodos(todos.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>To-Do Listesi</h2>

      <AddTodo onAdd={TodoEkle} />

      {todos.map(item => (
        <Todo
          key={item.id}
          id={item.id}
          todo={item.todo}
          isEditing={item.isEditing}
          completed={item.completed}
          onEdit={() => TodoEditModuAc(item.id)}
          onCancel={TodoEditVazgec}
          onUpdate={TodoGuncelle}
          onDelete={() => TodoSil(item.id)}
          onComplete={() => TodoTamamla(item.id)}
        />
      ))}
    </div>
  );
}

export default App;

