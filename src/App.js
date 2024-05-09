import {BrowserRoute, Switch, Route} from 'react-router-dom'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" components={TaskForm} />
      <Route path="/tasklist" components={TaskList} />
      <Route path="/taskitem/:id" components={TaskItem} />
    </Switch>
  </BrowserRouter>
)

export default App
