import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './components/TodoApp'
import { Provider } from 'react-redux'
import { store } from './store'
function App() {

  return (
    <>
    <Provider store={store}>
    <TodoApp/>
    </Provider>
      
    </>
  )
}

export default App
