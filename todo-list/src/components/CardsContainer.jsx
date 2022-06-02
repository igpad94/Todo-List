import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../actions";
import Pagination from "./Pagination";
import s from './styles/CardsContainer.module.css';
import TodoCard from "./TodoCard";


export default function CardsContainer () {

const todos = useSelector((state) => state.filteredTodos)
const currentPage = useSelector((state) => state.currentPage)
const dispatch = useDispatch()

const [todosPerPage] = useState(3);
const indexOfLastTodo = currentPage * todosPerPage;
const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)

const pagination = (pageNumber) => {
    dispatch(setPage(pageNumber))}

    return (
        <div className={s.cardsContainer}>
            <div className={s.cardsSubContainer}>
        {
            currentTodos?.map(e => {
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
            <div>
              <Pagination
                todosPerPage = {todosPerPage}
                allTodos = {todos.length}
                pagination = {pagination}
                currentPage = {currentPage}
                />
             </div>   
    </div>
    )
}