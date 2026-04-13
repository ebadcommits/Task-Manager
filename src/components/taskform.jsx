import {useState} from "react"


function TaskForm({onAddTask}) {
  const [text, setText] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    if (!text.trim()) return

    onAddTask(text)
    setText("")
  }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      type="text" 
      placeholder="Enter a task..."
      className="border p-2 rounded w-full" />
      <button type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
}

export default TaskForm;