export const Task = ({ name, due, assign }) => {
    return (
        <div className="task">
            <h1>{name}</h1>
            <h2>{due}</h2>
            <p>{assign}</p>
        </div>
    )
}