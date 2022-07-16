import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTod';
import { Todo } from './components/todo.model';

const App: React.FC = () => {
  let [todo, setTodo] = useState<Todo[]>([]);
  const todoHandler = (text: string) => {
    console.log(text)
    setTodo((prev) => {
      return [...prev,
      {
        id: Math.random().toString(),
        text: text
      }]
    })

  }
  const TodoHandlerDelete = (id: string) => {
    setTodo(prev => {
      return prev.filter(item => item.id !== id)
    })
  }
  return <div>
    <NewTodo onAddTodo={todoHandler} />
    <TodoList items={todo} onDeleteHandler={TodoHandlerDelete} />
  </div>
}

export default App;
