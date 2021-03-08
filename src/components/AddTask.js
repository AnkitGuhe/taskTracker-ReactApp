import { useState } from 'react'

const Addtask = ({ onAdd }) => {
    const [name, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('please enter a task')
            return
        }

        onAdd({ name, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tasks</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={name}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Date and TIme</label>
                <input
                    type="text"
                    placeholder="Add Date and Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Add Task" className="btn btn-block" />
        </form>
    )
}

export default Addtask
