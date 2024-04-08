import { Task } from "../Task.js/Task"

export const TaskList = ({tasks}) => {

    return (
        <ul className="todo-list">
            {tasks.map((task) => <Task tasks={task} />) }
            
      </ul>
    ) 
} 