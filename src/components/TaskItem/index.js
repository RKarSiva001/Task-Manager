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
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{title}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{description}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default TaskItem
