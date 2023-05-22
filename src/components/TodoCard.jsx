import { useState } from 'react'
import {
  BsFillTrashFill,
  BsPencil,
  BsFillXCircleFill,
  BsPencilSquare
} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { actions } from '../features/todos/todosSlice'

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [updatedContent, setUpdatedContent] = useState(todo.content)

  const handleToggle = id => {
    dispatch(actions.toggleTodo({ id }))
  }

  const handleRemove = id => {
    dispatch(actions.deleteTodo({ id }))
  }

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleUpdate = () => {
    dispatch(
      actions.updateTodo({
        id: todo.id,
        content: updatedContent
      })
    )
    setEditMode(false)
  }

  const handleCancel = () => {
    setUpdatedContent(todo.content)
    setEditMode(false)
  }

  const handleChange = e => {
    setUpdatedContent(e.target.value)
  }

  return (
    <div className='flex justify-between p-4 bg-white rounded-2xl mb-4 items-center transition-all duration-300 hover:bg-gray-200'>
      {editMode ? (
        <input
          type='text'
          value={updatedContent}
          onChange={handleChange}
          className='mr-2 px-2 py-1 border text-lg transition-all duration-400 hover:bg-gray-200'
        />
      ) : (
        <div className='flex items-center gap-4'>
          <input
            type='checkbox'
            name='completed'
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
            className='form-checkbox h-6 w-8'
          />
          <p
            className={`text-xl py-1 px-3 ${
              todo.completed ? 'line-through' : ''
            }`}
          >
            {todo.content}
          </p>
        </div>
      )}
      <div className='flex gap-4 items-center'>
        {editMode ? (
          <>
            <button
              className='px-2 py-2 text-[rgb(73,72,69)] rounded transition-all duration-600 hover:text-gray-800'
              onClick={handleUpdate}
            >
              <BsPencilSquare className='text-2xl' />
            </button>
            <button
              className='px-2 py-2 text-[rgb(73,72,69)] rounded transition-all duration-600 hover:text-gray-800'
              onClick={handleCancel}
            >
              <BsFillXCircleFill className='text-2xl' />
            </button>
          </>
        ) : (
          <>
            <button
              className='px-1 py-1 text-[rgb(73,72,69)] rounded transition-all duration-600  hover:text-gray-800'
              onClick={handleEdit}
            >
              <BsPencil className='text-2xl' />
            </button>
            <button
              className='px-1 py-1 text-[rgb(73,72,69)] rounded transition-all duration-600  hover:text-[#f36863]'
              onClick={() => handleRemove(todo.id)}
            >
              <BsFillTrashFill className='text-2xl' />
            </button>
          </>
        )}
      </div>
      {editMode || todo.content ? null : <p>Halaman Kosong</p>}
    </div>
  )
}

export default TodoCard
