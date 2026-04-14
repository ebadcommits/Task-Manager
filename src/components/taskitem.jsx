function TaskItem({task, onDeleteTask, onToggleTask}) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded">

      <input type= "checkbox"
      checked={task.completed}
      onChange={() => onToggleTask(task.id)} />

      <span className={
        task.completed ? "line-through text-gray-500" : ""
      }
      >{task.text}</span>
      <button className="text-red-500 hover:text-red-700" onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;