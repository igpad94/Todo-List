import React from 'react'
import s from './styles/Pagination.module.css';

function Pagination({todosPerPage, allTodos, pagination, currentPage}) {
    const pageNumbers = []

    for(let i=1; i<=Math.ceil(allTodos/todosPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div className={s.pagination}>
                {pageNumbers && currentPage > 1 ? <button className={s.navigate} onClick={() => pagination(currentPage -1)}> Ant. </button> : null}
                {pageNumbers && pageNumbers.map(number =>{
                    return (
                    <button className={currentPage === number ? s.pageSelected : s.page} key={number} onClick={() => pagination(number)}>{number}</button>
                    )
                })}
                {pageNumbers && currentPage <= pageNumbers.length -1 ? <button className={s.navigate} onClick={() => pagination(currentPage + 1)}> Sig. </button> : null}
        </div>
    )
}

export default Pagination