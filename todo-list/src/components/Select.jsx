import React from "react"
import s from './styles/Select.module.css';

export default function Select ({value, name, onChange, options}) {

    return (
    <div>
    <select  className={s.selects} name={name} value={value} onChange={onChange}>
        {
        options?.map(e => {
            return(
                <option key={e} value={e === "Todas" ? "" : e} >{e}</option>
            )
        })}
    </select>
    </div>

    )
}