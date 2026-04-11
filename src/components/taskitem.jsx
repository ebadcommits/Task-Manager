function TaskItem() {
  return (
    <div className="flex justify-between items-centre bg-gray-100 p-3 rounded">
      <span>{TaskItem.text}</span>
      <button className="text-red-500">Delete</button>
    </div>
  );
}

export default TaskItem;