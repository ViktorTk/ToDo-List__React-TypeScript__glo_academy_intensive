import { ToDo } from '../../../models/todo-item'
import {
  ToDoItem,
  ToDoItemControl,
  ToDoItemControls,
} from './ToDoListItem.styled'

import checkIcon from '../../../assets/images/check.png'
import unCheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'

export const ToDoListItem = (props: {
  toDoItem: ToDo
  updateToDo: Function
  deleteToDo: Function
}) => {
  return (
    <ToDoItem>
      <span>{props.toDoItem.text}</span>
      <ToDoItemControls>
        <ToDoItemControl
          icon={trashIcon}
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></ToDoItemControl>
        <ToDoItemControl
          icon={props.toDoItem.isDone ? checkIcon : unCheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  )
}
