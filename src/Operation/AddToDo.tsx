import { ToDoListObject, ToDoObject } from '../Models/ToDoObject';
import { ReactiveVar } from '@apollo/client'
export default function createNewToDo(toDoListCache: ReactiveVar<ToDoListObject>) {
    return (nameTask: string) => {
        var currentTodo: any = toDoListCache;
        return currentTodo.addNewToDo(nameTask);
    }

}