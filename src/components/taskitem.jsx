function TaskItem({task}) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded">
      <span>{task.text}</span>
      <button className="text-red-500">Delete</button>
    </div>
  );
}

export default TaskItem;