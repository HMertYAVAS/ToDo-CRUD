import React from 'react'
import AddTodoItem from '../components/AddTodoItem'
import TodoItems from '../components/TodoItems'

export default function TodoPage() {
    return (
        <div className='mt-16'>
            <AddTodoItem />

            <div className='mt-10'>
                <TodoItems />
            </div>
        </div>
    )
}
