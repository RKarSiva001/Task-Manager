import {Routes, Route} from 'react-router-dom'

import TaskForm from './components/TaskForm'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/" Component={TaskForm} />
  </Routes>
)

export default App
