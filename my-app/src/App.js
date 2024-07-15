import { useCallback, useState,useRef } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import ToDoTemplete from './components/ToDoTemplate';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';

function App() {
  const [todos,setTodos] = useState([
    {
        id : 1,
        text : '1번목록',
        checked :  false,
    },
    {
        id : 2,
        text : '2번목록',
        checked :  false,
    },
    {
        id : 3,
        text : '3번목록',
        checked :  false,
    },
]);
  
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },[todos],
  )

  const handleRemove = id => {
    setTodos(todos.filter(todo=>todo.id !==id))
  }

  const handleToggle = id => {
    setTodos(todos.map(todo=>
      todo.id === id ? {...todo,checked : !todo.checked} : todo
    ))
  }
  return (
    <div>
      <Nav/>
      <ToDoTemplete>
        <ToDoInsert onInsert={onInsert}/>
        <ToDoList todos = {todos} onRemove={handleRemove} onToggle={handleToggle}/>
      </ToDoTemplete>
      <Footer/>
    </div>
  );
}

export default App;
