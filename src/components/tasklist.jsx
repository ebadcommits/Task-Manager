import TaskItem from "./taskitem";

function TaskList({tasks, onDeleteTask}) {
  if(tasks.length === 0) {
    return <p className="text-gray-500 mt-5">No tasks yet</p>
  }

  return (  
    <div className="mt-5 flex flex-col gap-3">
      {tasks.map((task) =>(
        <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;