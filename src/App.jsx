import { Provider } from 'react-redux'

import store from './redux/store'
import Todo from './components/Todo'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Todo />
      </div>
    </Provider>
  )
}

export default App
