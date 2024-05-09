import './index.css'

const TaskItem = props => {
  const {taskDetails, editTask, deleteTask, toggleInCompleted} = props
  const {id, title, description, priority, dueDate, inCompleted} = taskDetails

  const onClickInCompleted = () => {
    toggleInCompleted(id)
  }

  const onEdit = () => {
    editTask(id)
  }

  const onDelete = () => {
    deleteTask(id)
  }

  return (
    <li className="taskItem">
      <div>
        <button
          type="button"
          className="check-box-container"
          onClick={onClickInCompleted}
        >
          <input type="checkbox" id="isCompleted" value={inCompleted} />
          <br />
          <label htmlFor="isCompleted"> Is Completed</label>
        </button>
      </div>
      <div>
        <h1 className="title">Title: {title}</h1>
        <p className="description">Description: {description}</p>
        <p className="priority">Priority: {priority}</p>
        <p className="dueDate">Due Date: {dueDate}</p>
        <div className="button-container">
          <button type="button" className="edit-button" onClick={onEdit}>
            Edit
          </button>
          <button type="button" className="delete-button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
