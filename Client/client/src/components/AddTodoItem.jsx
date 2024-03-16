import { Button, FloatingLabel, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { HiMiniPencil } from 'react-icons/hi2';




export default function () {
    return (
        <div className="max-w-md mx-auto flex items-center">
        <TextInput id="email4" type="email" icon={HiMiniPencil} placeholder="Todo Item" className='w-full' required />
        <Button className='ml-20'>Add</Button>
    </div>
    )
}
