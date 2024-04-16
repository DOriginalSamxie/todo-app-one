import { useState } from 'react'
import { BsPlus, BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addTodo, updateSearch } from '../redux/action'
import ButtonFilter from './ButtonFilter'
import TodoList from './TodoList'

const Todo = () => {
  const dispatch = useDispatch()
  const [newTodoText, setNewTodoText] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleAddTodo = (text) => {
    dispatch(addTodo(text))
  }

  const handleAddTodoClick = () => {
    if (newTodoText.trim !== '') {
      handleAddTodo(newTodoText.trim())
      setNewTodoText('')
    }
  }
  const handleSearchChange = (value) => {
    setSearchTerm(value)
    dispatch(updateSearch(value))
  }
  return (
    <div className='max-w-5xl mx-auto sm:mt-8 bg-[#202142] rounded p-4'>
      <h2 className='text-[#ff6a95] mt-3 mb-6 text-2xl font-bold text-center uppercase'>
        Todo App
      </h2>
      <div className='flex items-center mb-4 '>
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type='text'
          name='addTodoInput'
          placeholder='Add Todo'
          className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
        />
        <button
          className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
          onClick={handleAddTodoClick}
        >
          <BsPlus />
        </button>
      </div>

      {/* filter and search */}
      <div className='flex items-center justify-between'>
        <ButtonFilter />
        <div className='flex items-center mb-4'>
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type='text'
            name='addTodoInput'
            placeholder='search'
            className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
          />
          <button
            className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
            onClick={handleAddTodoClick}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      {/* Todolist */}
      <TodoList />
    </div>
  )
}

export default Todo
