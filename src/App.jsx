import {useState} from "react"
import Header from "./components/header";
import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";


function App() {
  const [tasks, setTasks] = useState([])


  function addTask(text){
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }
  
  
  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  function toggleTask(id){
    setTasks(
      tasks.map((task)=>
      task.id == id ?
        {...task, completed: !task.completed}
          : task)
    )
  }
      return (
   <div className="container mx-auto max-w-lg mt-10 p-4">
      <Header />
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
   </div>
  );
}

export default App;