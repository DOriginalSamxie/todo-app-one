import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos
    const filter = state.filter
    const searchTerm = state.searchTerm

    return todos.filter((todo) => {
      const matchFilter =
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL'

      const matchSearch = todo.text.toLowerCase().includes(searchTerm)
      return matchFilter && matchSearch
    })
  })

  console.log('Filtered todos', filteredTodos)
  return (
    <ul>
      <li className='my-2 text-base text-white'>All Your activities here</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  )
}

export default TodoList
