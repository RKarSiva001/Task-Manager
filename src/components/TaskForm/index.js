import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TaskItem from '../TaskItem'

import './index.css'

const initialTasksList = [
  {
    id: uuidv4(),
    title: 'Final Semester Project',
    description:
      'A final semester project is a culmination of a student academic journey, typically undertaken in the last semester of their program',
    dueDate: '',
    inCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'Assignment',
    description:
      'An assignment is a task or project given to students by their instructors to assess their understanding of course material, develop critical thinking skills, and demonstrate their ability to apply concepts learned in class.',
    inCompleted: false,
  },
]

class TaskForm extends Component {
  state = {
    tasksList: initialTasksList,
    title: '',
    description: '',
    priority: '',
    dueDate: '',
    completedTasks: false,
  }

  toggleInCompleted = id => {
    this.setState(prevState => ({
      tasksList: prevState.tasksList.map(eachTask => {
        if (id === eachTask.id) {
          return {...eachTask, inCompleted: !eachTask.inCompleted}
        }
        return eachTask
      }),
    }))
  }

  onAddTask = event => {
    event.preventDefault()
    const {title, description, priority, dueDate} = this.state
    const newTask = {
      id: uuidv4(),
      title,
      description,
      priority,
      dueDate,
      inCompleted: false,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      title: '',
      description: '',
      priority: '',
      dueDate: '',
    }))
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangePriority = event => {
    this.setState({priority: event.target.value})
  }

  onChangeDueDate = event => {
    this.setState({dueDate: event.target.value})
  }

  editTask = id => {
    const {tasksList} = this.state

    const findTaskToBeEdited = tasksList.find(eachTask => eachTask.id === id)
    this.setState({
      title: findTaskToBeEdited.title,
      description: findTaskToBeEdited.description,
      priority: findTaskToBeEdited.priority,
      dueDate: findTaskToBeEdited.dueDate,
    })

    const filteredTasksList = tasksList.filter(eachTask => eachTask.id !== id)
    this.setState({tasksList: filteredTasksList})
  }

  deleteTask = id => {
    const {tasksList} = this.state

    const filteredTasksList = tasksList.filter(eachTask => eachTask.id !== id)
    this.setState({tasksList: filteredTasksList})
  }

  onToggleCompletedTasks = () => {
    const {completedTasks} = this.state

    this.setState(
      prevState => ({completedTasks: !prevState.completedTasks}, this.getCompletedTasks)
    )
  }

  getCompletedTasks = () => {
    const {tasksList} = this.state

    if (completedTasks) {
      const filterCompletedTasks = tasksList.filter(
        eachTask => eachTask.inCompleted === true,
      )
      this.setState({tasksList: filterCompletedTasks})
    } else {
      this.setState({tasksList})
    }
  }

  render() {
    const {title, description, priority, dueDate, tasksList} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="form-container">
            <h1 className="heading">My Tasks</h1>
            <form className="task-form-container" onSubmit={this.onAddTask}>
              <input
                value={title}
                onChange={this.onChangeTitle}
                className="input"
                placeholder="Title"
              />
              <br />
              <input
                className="input"
                value={description}
                onChange={this.onChangeDescription}
                placeholder="Description"
              />
              <br />
              <input
                className="input"
                value={priority}
                onChange={this.onChangePriority}
                placeholder="Priority"
              />
              <br />
              <input
                className="input"
                value={dueDate}
                onChange={this.onChangeDueDate}
                placeholder="Due Date"
              />
              <br />
              <button type="submit" className="button">
                Add Task
              </button>
            </form>
            <div className="filter-container">
              <ul className="filter-list">
                <li className="filter-list-item">
                  <button type="button completed-button" onClick={this.onToggleCompletedTasks} className="button">
                    Completed Tasks
                  </button>
                </li>
                <li className="filter-list-item">
                  <button type="button pending-button" onClick={this.onTogglePendingTasks} className="button">
                    Pending Tasks
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tasks-container">
            <ul>
              {tasksList.map(eachTask => (
                <TaskItem
                  key={eachTask.id}
                  taskDetails={eachTask}
                  editTask={this.editTask}
                  deleteTask={this.deleteTask}
                  toggleInCompleted={this.toggleInCompleted}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskForm
