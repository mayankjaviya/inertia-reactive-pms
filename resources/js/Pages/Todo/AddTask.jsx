import { router } from "@inertiajs/react";
import React, { useState } from "react";
import {AllSection} from "../Keys.jsx"

export default function AddTask(props) {
    const { section,hideNewTaskCard } = props;
    const [ task , setTask ] = useState('');
    const addNewTask = () => {
        hideNewTaskCard();
        router.post('/todo', {
            title:task,
            section : AllSection[section]
        });
    }

    return (
        <div className="card my-2">
        <div className="d-flex justify-content-between align-items-center bg-light ">
            <input className="mb-0 form-control" value={task} onChange={(e) => setTask(e.target.value)}/>
            <div className="d-flex align-items-center">
                <button className="btn text-danger" onClick={addNewTask}>Add</button>
            </div>
        </div>
    </div>
    );

}
