import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../actions"
import s from './styles/TodoCard.module.css';

export default function TodoCard ({description, title, state, priority, id}) {


const dispatch = useDispatch()

const handleDelete = (id) => {
    dispatch(deleteTodo(id))
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
            <p className={s.subtitle}>Estado:</p><p>{state}</p>
            <p className={s.subtitle}>Prioridad:</p><p>{priority}</p>
            </div>
            <div>
            <p className={s.subtitle}>Descripción:</p>
            <p className={s.description} >{description}</p>
            </div>
        </div>
    )
}