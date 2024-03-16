import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import { BsSunFill,BsList,BsFillMoonFill } from "react-icons/bs";


export default function Header() {
  const [dark,setDark] = useState('false')
  
  return (
    <div className=''>
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TO-DO</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className='mr-5' size={'sm'} color={'dark'} onClick={() => setDark(!dark)} outline pill>{dark ?  <BsFillMoonFill size={'1.2em'} /> : <BsSunFill size={'1.2em'} />} </Button>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <BsList size={'1.8em'} />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                {/* <span className="block truncate text-sm font-medium">name@flowbite.com</span> */}
              </Dropdown.Header>
              {/* <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider /> */}
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
        </div>
        {/* <Navbar.Collapse>
          <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  )
}
