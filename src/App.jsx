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

  return (
   <div className="container mx-auto max-w-lg mt-10 p-4">
      <Header />
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} />
   </div>
  );
}

export default App;