import React, { useState } from 'react';
import { TextInput, Button, Toast } from 'flowbite-react';
import { HiCheck, HiMiniPencil, HiXCircle } from 'react-icons/hi2';

export default function TodoForm() {
    const [todoTitle, setTodoTitle] = useState('');
    const [success,setSuccess] = useState(null)
    const [publishError, setPublishError] = useState(null);


    const handleAdd = async (e) => {
        if (e) {
            e.preventDefault();
        }
        try {
            const res = await fetch("/api/todo/createTodoItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todoTitle),
            });
            const data = await res.json();
            if (!res.ok) {
                setPublishError(data.message);
                setSuccess(false)
                return;
            }
            else {
                setPublishError(null);
                setSuccess(true)
                setTodoTitle('')
            }
        } catch (error) {
            setPublishError("Something went wrong");
        }
    }

    return (
        <>
{
    success && 
            <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">Todo added successfully.</div>
                <Toast.Toggle />
            </Toast>
}
{

    !success && publishError &&

    <Toast>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
      <HiXCircle className="h-5 w-5" />
    </div>
    <div className="ml-3 text-sm font-normal">{publishError}.</div>
    <Toast.Toggle />
  </Toast>
}

            <div className="justify-center mt-4 flex">
                <TextInput id="email" type="text" value={todoTitle.title ? todoTitle.title : ''} onChange={(e) => setTodoTitle({ ...todoTitle, title: e.target.value })} icon={HiMiniPencil} placeholder="Todo Item" className="w-full" required />
                <Button className="ml-20" onClick={() => handleAdd()}>Add</Button>
            </div>
        </>
    );
}