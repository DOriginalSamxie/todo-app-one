import { useDispatch, useSelector } from 'react-redux'
import { filteredTodo, markCompleted } from '../redux/action'
const ButtonFilter = () => {
  const dispatch = useDispatch()
  const currentFilter = useSelector((state) => state.filter)
  const handleFIlter = (filter) => {
    dispatch(filteredTodo(filter))
  }
  return (
    <div className='flex space-x-4 items-center'>
      <select
        value={currentFilter}
        onChange={(e) => {
          handleFIlter(e.target.value)
        }}
        className='text-sm px-2 py-1 rounded border border-green-50 focus:outline-none'
      >
        <option value='ALL'>Default</option>
        <option value='COMPLETED'>Completed</option>
        <option value='INCOMPLETE'>Incomplete</option>
      </select>
      <button
        onClick={() => dispatch(markCompleted())}
        className='text-sm px-2 py-1 bg-green-500 text-white ml-2 rounded'
      >
        Mark All Completed
      </button>
    </div>
  )
}

export default ButtonFilter
