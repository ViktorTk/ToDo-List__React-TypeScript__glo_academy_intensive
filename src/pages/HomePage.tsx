import { ToDo } from '../models/todo-item'
import { ListItem } from '../components/ListItem/ListItem'

interface ComponentsProps {
  todos: ToDo[]
}

export const HomePage = ({ todos }: ComponentsProps) => {
  return (
    <div className="container">
      {todos.map((todo: ToDo) => {
        return <ListItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}
