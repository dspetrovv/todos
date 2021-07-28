import React, {useState} from 'react';

export default function useTodos() {
    const [todos, setTodos] = useState([
        {id: 0, text: 'Wake up', isDone: false},
        {id: 1, text: 'Wash up', isDone: false},
        {id: 2, text: 'Have breakfast', isDone: false},
        {id: 3, text: 'Write some code', isDone: false}
    ])
    const [todo, setTodo] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)

    function createNewState(event) {
        setTodo(event.target.value)
    }

    function addTodo(event) {
        const date = new Date().getTime();
        setTodos([...todos, {id: date.toString(), text: todo, isDone: false}]);
        setTodo('');
        if (isEmpty) {
            setIsEmpty(false)
        }
        event.preventDefault();
    }

    function changeStatus(event) {
        const newTodos = [];
        todos.map(todo => {
            if (todo.id.toString() === event.target.id) {
                todo.isDone = !todo.isDone;
                newTodos.push(todo);
                document.getElementById(todo.id.toString()).parentElement.classList.toggle("done");
            } else newTodos.push(todo);
        });
        setTodos(newTodos);
    }

    function deleteTodo(event,id) {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        if (newTodos.length === 0) {
            setIsEmpty(true)
        }
        event.preventDefault()
    }

    return {
        todos, todo, isEmpty, createNewState, addTodo, changeStatus, deleteTodo
    }
}