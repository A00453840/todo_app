import { db } from './db'

export function getAllTasksFromDB() {
    return db.tasks.toArray().then((data) => {
        return data
    })
}

export function addTaskToDB(name, due, assign) {
    console.log(name, due, assign);
    db.tasks.put({ due, name, assign })
        .then(() => true)
        .catch(e => {
            alert("Something's wrong!!... " + e)
        })
}