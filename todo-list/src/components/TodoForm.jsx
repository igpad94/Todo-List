import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../actions";
import Select from "./Select";
import s from './styles/TodoForm.module.css';

export default function TodoFrom () {

const dispatch = useDispatch()

const [input, setInput ] = useState({
    title: "",
    description: "",
    priority: "Baja",
    state: "Nueva"
});

const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput({
        title: "",
        description: "",
        priority: "Baja",
        state: "Nueva"
    })
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={s.formContainer}>
                    <h3>Crear Una Tarea:</h3>
                    <div className={s.titleDiv}>
                    <input
                        name="title"
                        type="text"
                        placeholder="Título..."
                        value={input.title}
                        onChange={handleChange} 
                        />
                    <Select
                    name="priority"
                    value={input.priority}
                    onChange={handleChange}
                    options={["Baja", "Media", "Alta"]}
                    />
                    <Select
                    name="state"
                    value={input.state}
                    onChange={handleChange}
                    options={["Nueva", "En Progreso", "Completada"]}
                    />
                    </div>
                    <div>
                        <textarea 
                        name="description"
                        type="text"
                        placeholder="Descripcion..."
                        value={input.description}
                        onChange={handleChange}
                        />
                    </div>
                    <div className={s.buttonDiv}>
                    <button 
                    className={!input.title || !input.description ? s.buttonDisabled : s.button}
                    disabled={!input.title || !input.description} type="submit"> Crear Tarea</button>
                    </div>
                </div>
            </form>
        </div>
    )
}