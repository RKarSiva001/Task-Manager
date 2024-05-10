import TasksContext from '../../context/TasksContext'

const TaskItemDetails = props => (
  <TasksContext.Consumer>
    {value => {
      const {tasksList} = value
      const {match} = props
      // const {params} = match
      // const {id} = params
      console.log(match, tasksList)

      // const taskItemDetails = tasksList.find(eachTask => eachTask.id === id)
      // const {
      //   id,
      //   title,
      //   description,
      //   priority,
      //   dueDate,
      //   inCompleted,
      // } = taskItemDetails

      return (
        <div>
          {/* <h1 className="title">Title: {title}</h1>
          <p className="description">{description}</p>
          <p className="priority">Priority: {priority}</p>
          <p className="dueDate">Due Date: {dueDate}</p>
          {inCompleted ? <p>Task Completed</p> : <p>Task is pending</p>} */}
        </div>
      )
    }}
  </TasksContext.Consumer>
)

export default TaskItemDetails
