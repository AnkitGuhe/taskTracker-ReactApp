import { FaTimes, FaCalendarTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onDoubleClick }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onDoubleClick(task.id)}
        >
            <h3>
                {task.name}
                <FaTimes
                    onClick={() => onDelete(task.id)}
                    style={{ color: 'red', cursor: 'pointer' }}
                ></FaTimes>
            </h3>
            <p>
                <FaCalendarTimes />
                {task.day}
            </p>
        </div>
    )
}

export default Task
