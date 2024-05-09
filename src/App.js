import {Routes, Route} from 'react-router-dom'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/" Component={TaskForm} />
    <Route path="/tasklist" Component={TaskList} />
    <Route path="/taskitem/:id" Component={TaskItem} />
  </Routes>
)

export default App
