import { useState, useEffect } from "react"
import { getAllTasksFromDB } from "../utils/helpers"
import { Task } from "./Task"

export const Tasks = () => {
    const [tasksList, setTasksList] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const existingTasks = await getAllTasksFromDB()
        setTasksList(existingTasks)
    }, [])

    return (
        <div>
            {tasksList ?
                tasksList.map((task, index) => <Task key={index} name={task.name} due={task.due} assign={task.assign} />)
                : "Loading..."}
        </div>
    )
}