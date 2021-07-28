import React from 'react';
import './index.css';
import useTodos from "./Hooks";

export default function TodoList() {
  const todosHook = useTodos();

  return (
    <>
      <form onSubmit={todosHook.addTodo}>
        <input type="text" className="inputStyle" onChange={todosHook.createNewState} value={todosHook.todo}/>
          <button type="submit" className="customBtn createBtn">Add</button>
            {todosHook.isEmpty ? (
              <h3>Nothing?</h3>
            ) : (
              <ul style={{padding: 0}}>
                {todosHook.todos.map(todo =>
                  (<li className="todoList" key={todo.id}>
                    <span>
                      <input id={todo.id.toString()} type="checkbox" className="checkboxClass" onClick={todosHook.changeStatus}/>
                        {todo.text}
                    </span>
                    <button
                        type="submit"
                        className="customBtn deleteBtn"
                        onClick={event => todosHook.deleteTodo(event,todo.id)}
                    >Delete</button>
                  </li>)
                )}
              </ul>)
            }
        </form>
    </>
  )
}