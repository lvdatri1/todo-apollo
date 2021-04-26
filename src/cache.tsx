import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { ToDoListObject } from './Models/ToDoObject'

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                ToDoList: {
                    read() {
                        console.log('hello from in cache', ToDoListCache);
                        return ToDoListCache;
                    }
                }
            }
        }
    }
});
export const ToDoListCache: ReactiveVar<ToDoListObject> = makeVar<ToDoListObject>(new ToDoListObject());
