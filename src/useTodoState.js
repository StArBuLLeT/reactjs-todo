import { useState } from 'react';

export default () => {
  const [todos, setTodos] = useState([
    'Go Outside',
    'Clean the room'
  ]);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};
