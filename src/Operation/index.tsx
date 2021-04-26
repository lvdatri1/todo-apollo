import createNewToDo from './AddToDo';
import { ToDoListCache } from '../cache'
import { useQuery as U } from '@apollo/client'
import { GET_TODO_LIST } from './GetToDos'
import { ToDoListObject } from '../Models/ToDoObject';

export const ToDoMutation = {
    addToDo: createNewToDo(ToDoListCache),

}