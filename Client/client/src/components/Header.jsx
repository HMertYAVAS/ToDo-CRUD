import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import React, { useState,useEffect } from 'react'
import { BsSunFill,BsList,BsFillMoonFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";



export default function Header() {
  const [dark,setDark] = useState('false')
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {
    navigate('/')
    try {
      const res = await fetch('api/user/signout', {
        method: 'POST',
      })
      console.log(res)
      const data = await res.json()
      if (!res.ok) {
        console.log(data.message)
      } else {
        dispatch(signoutSuccess())
      }
    } catch (error) {
      console.log(error)
    }
  };

  
  return (
    <div className=''>
      <Navbar fluid rounded >
        <Navbar.Brand href="/">
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
              {
                currentUser &&

              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                {/* <span className="block truncate text-sm font-medium">name@flowbite.com</span> */}
              </Dropdown.Header>
              }
              {currentUser &&
              <>
              <Dropdown.Item onClick={() => navigate('/todo')}>Todo</Dropdown.Item>
              <Dropdown.Divider />
              </>
              }
              {/* <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider /> */}
              {
                currentUser ?
                <Dropdown.Item onClick={handleLogout} >Sign out</Dropdown.Item>
                :
                <Dropdown.Item onClick={()=>navigate("/sign-in")} >Sign In</Dropdown.Item>
              }
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
      <div className="border-b border-gray-300 w-full mb-4"></div>
    </div>
  )
}
