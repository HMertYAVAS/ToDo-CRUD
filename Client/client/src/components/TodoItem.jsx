import { Accordion, Avatar, Button, Dropdown, TextInput } from 'flowbite-react'
import React from 'react'
import { BsFillPlayCircleFill, BsFillSkipForwardCircleFill, BsFillStarFill } from 'react-icons/bs'
import { HiMiniEllipsisVertical } from 'react-icons/hi2'

export default function TodoItem() {
    return (
        <div className='mt-5'>
            <Accordion className='h-10 border-0'>
                <Accordion.Panel >
                    <Accordion.Title className='h-10'>What is Flowbite?</Accordion.Title>
                    <Accordion.Content>
                        <div className='flex flex-row justify-evenly'>
                            <Dropdown label="Priority" color={'gray'} >
                                <Dropdown.Item>1</Dropdown.Item>
                            </Dropdown>
                            <Button color="gray"><BsFillStarFill className='mr-2' />Starred</Button>
                            <Button color="gray"><BsFillPlayCircleFill className='mr-2' />Finish</Button>
                            <Button color="warning">Edit</Button>
                            <Button color="failure">Delete</Button>
                        </div>

                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>

        </div>
    )
}
