import { useState, useRef } from "react"

import { addTaskToDB } from "../utils/helpers";

export const Form = () => {
    const [name, setName] = useState("");
    const [due, setDue] = useState("");
    const [assign, setAssign] = useState("");

    const nameEl = useRef(null);
    const dueEl = useRef(null);
    const assignEl = useRef(null);

    const submitForm = async () => {
        await addTaskToDB(name, due, assign)
    }

    return (
        <div>
            <form>

                <label>Task Name</label>
                <input
                    ref={nameEl}
                    type="text"
                    id="taskName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Task name..."
                />

                <label>Due Date</label> <br/>
                <input
                    ref={dueEl}
                    type="date"
                    id="dueDate"
                    value={due}
                    onChange={(e) => setDue(e.target.value)}
                    //placeholder="DD/MM/YYYY"
                />
                 <br/> <br/>

                <label>Assigned to</label>
                <input
                    ref={assignEl}
                    type="text"
                    id="assignedTo"
                    value={assign}
                    onChange={(e) => setAssign(e.target.value)}
                    placeholder="Task assigned to?"
                />

                <button onClick={() => submitForm()}>Add Task</button>
            </form>
        </div>
    )
}