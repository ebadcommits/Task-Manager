import {useState} from "react"
import Button from "./ui/button";
import Input from "./ui/input";

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
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        />
      
      <Button type="submit" className=" hover:bg-blue-600">Add</Button>
    </form>
  );
}

export default TaskForm;