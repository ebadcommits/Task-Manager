function TaskItem({task, onDeleteTask}) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded">
      <span>{task.text}</span>
      <button className="text-red-500" onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;