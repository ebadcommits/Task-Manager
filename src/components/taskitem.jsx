import Button from "./ui/Button";
import Card from "./ui/Card";

function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <Card className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />

        <span
          className={
            task.completed ? "line-through text-gray-500" : ""
          }
        >
          {task.text}
        </span>
      </div>

      <Button
        className="bg-red-500 hover:bg-red-600"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </Button>
    </Card>
  );
}

export default TaskItem;