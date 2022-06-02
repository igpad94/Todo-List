import React from "react";
import { useSelector } from "react-redux";
import s from './styles/CardsContainer.module.css';
import TodoCard from "./TodoCard";


export default function CardsContainer () {

const todos = useSelector((state) => state.filteredTodos)

    return (
        <div className={s.cardsContainer}>
        {
            todos?.map(e => {
                return(
                    <TodoCard 
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    description={e.description}
                    state={e.state}
                    priority={e.priority}
                    />
                )
            })
        }
    </div>
    )
}