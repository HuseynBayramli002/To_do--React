import { useState } from "react"
import Form from "./Form"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
uuidv4()

const TodoList = () => {
  const [todoValue, SetTodo] = useState([])
  const createTodo = todo => {
    SetTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
  }
  return (
    <div className="container bg-gray-700 mt-20 p-8 rounded-md">
      <Form createTodoo={createTodo} />
      {
        todoValue.map((todo, idx) => (
          <Todo todo={todo} key={idx} />
        ))
      }
    </div>
  )
}

export default TodoList