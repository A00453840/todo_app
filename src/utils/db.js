import Dexie from 'dexie';

export const db = new Dexie('taskListDB');

db.version(1).stores({
    tasks: `
        id++,
        taskName,
        dueDate,
        assignedTo`,
});