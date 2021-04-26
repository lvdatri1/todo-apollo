import { gql } from '@apollo/client';
export const GET_TODO_LIST = gql`
query GetToDoList{
    ToDoList @client{
        name
    }
}
`