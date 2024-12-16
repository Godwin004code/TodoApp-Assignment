import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, [id]);

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h2>Todo Details</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default TodoDetails;
