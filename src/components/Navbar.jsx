import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className=' mt-10 mb-4'>
      <ul className='flex gap-4'>
        <li>
          <NavLink
            exact
            to={'/'}
            className='text-[rgb(73,72,69)] hover:text-white px-2 py-1 rounded'
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/active'}
            className='text-[rgb(73,72,69)] hover:text-white px-2 py-1 rounded'
          >
            Active
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/completed'}
            className='text-[rgb(73,72,69)] hover:text-white px-2 py-1 rounded'
          >
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
