import React from 'react';
import './index.css';
import TodoList from "./TodoList";

function App() {

  return (
      <div className="App">
        <h1 style={{marginBottom: 0}}>This is what I have to do:</h1>
        <TodoList />
      </div>
  );
}

export default App;
