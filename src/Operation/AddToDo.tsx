import { ToDoListObject, ToDoObject } from '../Models/ToDoObject';
import { ReactiveVar } from '@apollo/client'
export default function createAddToDo(todovar: ReactiveVar<ToDoListObject>) {
    return (nameTask: string) => {
        var allCurrentTodo: ToDoListObject = todovar;
        todovar(allCurrentTodo.push({ name:}))
    }

}