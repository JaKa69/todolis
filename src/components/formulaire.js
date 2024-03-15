import styled from "styled-components";
import Button from "./buttons";
import { useState } from "react";

const Form = styled.form`
    display: ${(props) => (props.show ? "inline-flex" : "none")};
	input {
		border: none;
		border-bottom: 2px solid darksalmon;
		outline: none;
	}
`;

const Formulaire = (props) => {
	const [task, setTask] = useState({label: "", done: false});
	const handleChange = (value) => setTask({label: value, done: false});
    const saveTask = (event) => {
        event.preventDefault();
        props.addTask(task);
        setTask({ label: "", done: false });
    };
	return (
		<Form show={props.show} onSubmit={saveTask}>
            <input 
                type="text" 
                placeholder="Intitulé de la tâche"
                onChange={(event) => handleChange(event.target.value)}
            />
			<Button
				label="Ajouter"
				onClick={saveTask}
			/>
        </Form>
	);
};

export default Formulaire;


// const Formulaire = (props) =>{
//     const [task, setTask] = useState("");
//     const handleChange = (value) => setTask(value);
//     return (
//         <Form show={props.show} onSubmit={saveTask}>
//             <input type='text' placeholder="Intitulé de la tâche" />
//              <Button
//              label="Ajouter"
//              onClick={()=> props.addTask(task)}
//              value={task}
//             onChange={(event) => handleChange(event.target.value)}
//              />
//              <Button label="Ajouter" onClick={saveTask} />
//         </Form>
//     );
//     };
// export default Formulaire;