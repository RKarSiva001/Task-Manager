import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
// import {format} from 'date-fns'
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
    // priority: '',
    // dueDate: '',
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
    const {title, description} = this.state
    const newTask = {
      id: uuidv4(),
      title,
      description,
      inCompleted: false,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      title: '',
      description: '',
    }))
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  render() {
    const {title, description, tasksList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">My Tasks</h1>
          <form className="task-form-container" onSubmit={this.onAddTask}>
            <input
              value={title}
              onChange={this.onChangeTitle}
              className="input"
              placeholder="Title"
            />
            <input
              className="input"
              value={description}
              onChange={this.onChangeDescription}
              placeholder="Description"
            />
            <button type="submit" className="button">
              Add Task
            </button>
          </form>
          <ul className="tasks-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Title</p>
              <hr className="separator" />
              <p className="table-header-cell description-column">Description</p>
            </li>

            {tasksList.map(eachTask => (
              <TaskItem
                key={eachTask.id}
                taskDetails={eachTask}
                toggleInCompleted={this.toggleInCompleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TaskForm
