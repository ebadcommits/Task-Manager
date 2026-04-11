import TaskItem from "./taskitem";

function TaskList({tasks}) {
  if(tasks.length === 0) {
    return <p className="text-gray-500 mt-5">No tasks yet</p>
  }

  return (
    <div className="mt-5 flex flex-col gap-3">
      {tasks.map((task) =>(
        <TaskItem Key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;