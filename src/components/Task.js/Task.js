

export const Task = ({tasks}) => {

    return (
        <li className={tasks.status}>
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
              <span className="description">{tasks.description}</span>
              <span className="created">{tasks.createdTime}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
    )
}