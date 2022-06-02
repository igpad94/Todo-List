import React, { useState } from "react";
import { useDispatch }  from "react-redux";
import { filterTodos, setPage } from "../actions";
import Select from "./Select";

import s from './styles/TodoList.module.css';
import CardsContainer from "./CardsContainer";


export default function TodoList () {


const dispatch = useDispatch()

const [filter, setFilter ] = useState({
    priority: "",
    state: ""
});

const handleChange = (e) => {
    setFilter({
        ...filter,
        [e.target.name]: e.target.value
    })
    dispatch(filterTodos({  
        ...filter,
        [e.target.name]: e.target.value}))
    dispatch(setPage(1))
    
};

    return (
        <div className={s.listContainer}>
            <div>
                <h3>Filtrar por:</h3>
            </div>
            <div className={s.filtersDiv}>
                <div style={{marginRight: "10px"}}>
                    <p>Prioridad</p>
                    <Select
                    name="priority"
                    value={filter.priority}
                    onChange={handleChange}
                    options={["Todas", "Baja", "Media", "Alta"]}
                    />
                </div>
                <div>
                    <p>Estado</p>
                    <Select
                    name="state"
                    value={filter.state}
                    onChange={handleChange}
                    options={["Todas", "Nueva", "En Progreso", "Completada"]}
                    />
                </div>
            </div>
            <CardsContainer/>
        </div>
    )
}