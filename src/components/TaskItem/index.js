import './index.css'

const TaskItem = props => {
  const {taskDetails, toggleInCompleted} = props
  const {id, title, description, inCompleted} = taskDetails

  const starImgUrl = inCompleted
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  const onClickFavoriteIcon = () => {
    toggleInCompleted(id)
  }

  return (
    <li className="taskItem">
      <div>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
      <div>
        <h1 className="title">Title: {title}</h1>
        <p className="description">Description: {description}</p>
      </div>
    </li>
  )
}

export default TaskItem
