import "./TodoList.css";
import { Route } from 'react-router-dom'


// const TodoList: React.FC<{items:{id:string, text:string}[]}> = ({items}) => {
//   return <ul>
//     {items.map(item => {
//       return <li key={item.id}>{item.text}</li>
//     })}
//   </ul>
// };
interface TodoListProps {
  items: { id: string, text: string }[],
  onDeleteHandler: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteHandler }) => {
  return <ul>
    {items.map(todo => {
      return <li > {todo.text}
        <span onClick={() => onDeleteHandler(todo.id)} className="delete">delete</span></li>
    })}
  </ul>
}
export default TodoList;