import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Todo 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      dueDate: '2024-04-03',
    },
    {
      title: 'Todo 2',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada.',
      dueDate: '2024-04-06',
    },
    {
      title: 'Todo 3',
      description:
        'Suspendisse potenti. Nullam nec nibh nec nunc congue mollis.',
      dueDate: '2024-04-09',
    },
    {
      title: 'Todo 4',
      description:
        'Vivamus nec nisi nec nunc mattis molestie. Pellentesque habitant morbi.',
      dueDate: '2024-04-11',
    },
  ]);

  // Function to add new ToDo
  
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="col-md-8">
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
