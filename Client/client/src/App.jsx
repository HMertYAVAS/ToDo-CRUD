import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoItem from './components/AddTodoItem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import AuthPrivateRoute from './components/AuthPrivateRoute'
import TodoPage from './pages/TodoPage'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path='/todo' element={<TodoPage />}/>
        </Route>
        <Route element={<AuthPrivateRoute />}>
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

