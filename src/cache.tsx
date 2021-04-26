import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { ToDoListObject, ToDoObject } from './Models/ToDoObject'

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                ToDoList: {
                    read() {
                        console.log('hello from in cache', ToDoListCache());
                        return ToDoListCache();
                    }
                }
            }
        }
    }
});
const initValueToDo: ToDoListObject = [new ToDoObject('tao loa', 1)]
export const ToDoListCache: ReactiveVar<ToDoListObject> = makeVar<ToDoListObject>(initValueToDo);


