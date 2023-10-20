import { faTrashCan, faCircleCheck as completed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AllSection } from "../Keys";
import { Link, router, usePage } from "@inertiajs/react";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function Task(props) {
    const { types } = usePage().props;
    const { task, draggedTaskId } = props;
    const changeStatus = (id, section) => {
        router.put(`/todo/${id}`, {
            section: section
        },{
            preserveScroll: true,
            only: ['tasks']
        });
    }

    const [showCheck, setShowCheck] = useState({ id: null, show: false });

    const showCheckMark = (id, show = false) => {
        setShowCheck({ id: id, show: show });
    }

    const makeTaskCompleted = (id, isCompleted = true) => {
        router.put(`/todo/${id}`, {
            completed: isCompleted
        },{
            preserveScroll: true,
            only: ['tasks','completedTasks']
        });
    }

    const onDrag = (event, taskId) => {
        event.preventDefault();
        if (taskId) {
            draggedTaskId(taskId)
        }
    }

    const changeType = (id, typeId) => {
        router.put(`/todo/${id}`, {
            type_id: typeId
        },{
            preserveScroll: true,
            only: ['tasks']
        });
    }

    if (!task.completed) {
        return (
            <div className="card my-2 shadow-sm shadow" onMouseEnter={() => showCheckMark(task.id, true)} onMouseLeave={() => showCheckMark(task.id)}
                draggable
                onDrag={(event) => onDrag(event, task.id)}
            >

                <div className="p-2 d-flex justify-content-between align-items-center">
                    <span className="mb-0 d-flex align-items-center">
                        {task.title}
                        {(showCheck.show && showCheck.id == task.id) &&
                            <span role="button" className="fs-5 ms-2 text-success" onClick={() => makeTaskCompleted(task.id)}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                        }
                    </span>
                    <div className="mx-3 d-flex align-items-center">
                        <div className="btn-group">

                            <button type="button" style={task.type && { backgroundColor : task.type.color }} className="btn dropdown-toggle py-0" data-bs-toggle="dropdown" aria-expanded="false">
                              {task.type_id ? task.type.name : 'Task Type' }
                            </button>

                            <ul className="dropdown-menu">
                                {types.map((type, index) => (
                                    <li className="dropdown-item text-center py-0" key={index} onClick={() => changeType(task.id, type.id)} ><h3 className="text-light mb-0 p-1 badge" style={{ backgroundColor : type.color }}>{type.name}</h3></li>
                                ))}
                            </ul>
                        </div>
                        <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle py-0" data-bs-toggle="dropdown" aria-expanded="false">
                              {AllSection[task.section]}
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item" onClick={() => changeStatus(task.id, AllSection.backlog)} >Backlog</li>
                                <li className="dropdown-item" onClick={() => changeStatus(task.id, AllSection.inProgress)}>In Progress</li>
                                <li className="dropdown-item" onClick={() => changeStatus(task.id, AllSection.done)}>Done</li>
                            </ul>
                        </div>
                        <Link className="btn text-success" method="delete" href={`/todo/${task.id}`} as="button"><FontAwesomeIcon icon={faTrashCan} /></Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className="card my-2">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <span className="mb-0 d-flex align-items-center">
                    <span role="button" className="fs-5 me-2 text-success" onClick={() => makeTaskCompleted(task.id, false)}>
                        <FontAwesomeIcon icon={completed} />
                    </span>
                    <del> {task.title} </del>
                </span>
            </div>
        </div>
    }
}
