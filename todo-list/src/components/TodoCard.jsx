import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, updatePriority, updateState } from "../actions"
import s from './styles/TodoCard.module.css';

export default function TodoCard ({description, title, state, priority, id}) {


const dispatch = useDispatch()

const handleDelete = (id) => {
    dispatch(deleteTodo(id))
}

const handleState = (id, state) => {
    if(state === "Nueva") {
        dispatch(updateState(id, "En Progreso"))
    }
    if(state === "En Progreso") {
        dispatch(updateState(id, "Completada"))
    }
    if(state === "Completada") {
        dispatch(updateState(id, "Nueva"))
    }   
} 
const handlePriority = (id, priority) => {
    if(priority === "Baja") {
        dispatch(updatePriority(id, "Media"))
    }
    if(priority === "Media") {
        dispatch(updatePriority(id, "Alta"))
    }
    if(priority === "Alta") {
        dispatch(updatePriority(id, "Baja"))
    }   
} 


    return (
        <div className={s.card}>
            <div className={s.header}>
            <h3>Título: {title}</h3>
            <button
            className={s.buttonX}
            onClick={() => handleDelete(id)}> X </button>
            </div>
            <div className={s.filters}>
            <p className={s.subtitle}>Estado:</p><p>{state}</p> <button onClick={() => handleState(id, state)} className={s.nextButton}>{">>"}</button>
            <p className={s.subtitle}>Prioridad:</p><p>{priority}</p> <button onClick={() => handlePriority(id, priority)} className={s.nextButton}>{">>"}</button>
            </div>
            <div>
            <p className={s.subtitle}>Descripción:</p>
            <p className={s.description} >{description?.length > 285 ? `${description.toLowerCase().slice(0, 284)}(...)` : description?.toLowerCase()}</p>
            </div>
        </div>
    )
}