import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
    const [showAddTask, setAddTask] = useState(false)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const getTask = async () => {
            const tasksFromServer = await fetchTask()
            setTasks(tasksFromServer)
        }
        getTask()
    }, [])
    // fetch tasks
    const fetchTask = async () => {
        const response = await fetch('http://localhost:8000/tasks')
        const data = await response.json()
        console.log(data)
        return data
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()
        setTasks([...tasks, data])
    }

    // Delete Tasks
    const deletetask = async (id) => {
        await fetch(`http://localhost:8000/tasks/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        )
    }

    return (
        <div className="container">
            <Header
                onAdd={() => setAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deletetask}
                    onDoubleClick={toggleReminder}
                />
            ) : (
                'Add your first task'
            )}
        </div>
    )
}

export default App
