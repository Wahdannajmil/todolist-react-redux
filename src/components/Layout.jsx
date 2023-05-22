import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { actions } from '../features/todos/todosSlice'
import { useDispatch, useSelector } from 'react-redux'
import myImage from '../assets/images/bgtodo6.jpg'
import '../assets/style/style.css'

const Layout = () => {
  const userInput = useSelector(state => state.todos.userInput)
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  const handleCreateTodo = e => {
    e.preventDefault()
    dispatch(actions.createTodo())
  }

  const handleSetUserInput = userInput => {
    dispatch(actions.setUserInput({ userInput }))
  }

  return (
    <div
      className='flex flex-col items-center justify-start p-4 min-h-screen font-poppins bg-cover bg-center'
      style={{ backgroundImage: `url(${myImage})` }}
    >
      <h1 className='pt-12 text-5xl font-extrabold mb-6 text-[rgb(73,72,69)] font-poppins'>
        What's the plan for today?
      </h1>
      <form
        className='flex flex-col md:flex-row gap-2'
        onSubmit={handleCreateTodo}
      >
        <input
          type='text'
          value={userInput}
          onChange={e => handleSetUserInput(e.target.value)}
          placeholder='Enter your todo message'
          className='p-2 px-6 md:w-96 py-4 font-poppins rounded-full'
        />
        <input
          type='submit'
          className='px-4 py-2 text-white rounded-full bg-yellow-500'
          value='Create'
        />
      </form>
      <nav className='mt-12 mb-4'>
        <ul className='flex gap-4'>
          <li>
            <NavLink
              exact
              to={'/'}
              className='font-bold text-[rgb(73,72,69)] hover:text-white px-2 py-1 rounded'
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/active'}
              className='font-bold text-[rgb(73,72,69)] hover:text-white px-2 py-1 rounded'
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/completed'}
              className='font-bold text-[rgb(73,72,69)] hover:text-white px-2 py-1 rounded'
            >
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className='p-2'>
        {todos.length === 0 ? (
          <p className='text-white mr-2 px-4 py-1 border-4 text-lg'>
            Empty list
          </p>
        ) : (
          <Outlet />
        )}
      </section>
    </div>
  )
}

export default Layout
