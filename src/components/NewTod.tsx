import React, { useRef, useState } from "react"
import "./NewTodo.css";
type NewTodoProps = {
  onAddTodo: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  // let [task, setTask] = useState("");
  let textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const EnterText = textInputRef.current!.value;
    onAddTodo(EnterText)
    // console.log(e)
  }
  // const taskchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTask(e.target.value);

  // }


  return <form onSubmit={todoSubmitHandler}>
    <div>
      <label htmlFor="todo-text"></label>
      <input
        type="text"
        id="todo-text"
        name="text" ref={textInputRef}
      />
    </div>
    <button type="submit">Submit</button>
  </form>

}

export default NewTodo