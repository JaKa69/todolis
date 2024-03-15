import "./App.css";
//composants
import Button from "./components/buttons";
import Formulaire from "./components/formulaire";
import { useState } from "react";
import Task from "./components/task";


function App() {
	const [displayForm, setDisplayForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const updateTasks = (task) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};
  
  const completeTask = (index) => {
    setTasks((prevTasks) => {
        return prevTasks.map((task, i) => {
            if (i !== index) {
                return task;
            } else {
                task.done = true;
                return task;
            }
        });
    });
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

	return (
		<div className="App container">
			<header>
				<h1>Todolist</h1>
				<Button
					label={
						displayForm
							? "Fermer le formulaire"
							: "Ajouter une tâche"
					}
					onClick={() => {
            console.log(tasks)
            setDisplayForm(!displayForm);
          }}
				/>
			</header>
			<Formulaire show={displayForm} addTask={updateTasks}/>
      {tasks.map((task, index) => (
        <ul className="tasks-list">
          <li key={index}>
            <Task
              label={task.label}
              done={task.done}
              remove={removeTask}
              complete={completeTask}
              index={index}
            />
          </li>
        </ul>
      ))}
		</div>
	);
}
export default App;