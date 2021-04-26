import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { GET_TODO_LIST } from '../Operation/GetToDos'
export default function MainList() {
    function Hello() {
        const { loading, error, data } = useQuery(GET_TODO_LIST);
        console.log('hello data in main', data);
        console.log('hello error', error);
        console.log('hello loading', loading);
        return <div>
            this is from
        </div>
    }
    return (
        <div>
            Main List
            {Hello()}
        </div>
    )
}
