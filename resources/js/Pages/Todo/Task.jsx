import { faTrashCan,faCircleCheck as completed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AllSection } from "../Keys";
import { Link, router } from "@inertiajs/react";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function Task(props) {

    const { task,draggedTaskId } = props;
    const changeStatus = (id,section) => {
        router.put(`/todo/${id}`, {
            section : section
        });
    }

    const [ showCheck, setShowCheck ] = useState({id : null, show : false});

    const showCheckMark = (id,show = false) => {
        setShowCheck({id : id, show : show});
    }

    const makeTaskCompleted = (id,isCompleted = true) => {
        router.put(`/todo/${id}`, {
            completed : isCompleted
        });
    }

    const onDrag = (event, taskId) => {
        event.preventDefault();
        if(taskId){
            draggedTaskId(taskId)
        }
    }

    if(!task.completed) {
    return (
        <div className="card my-2" onMouseEnter={()=>showCheckMark(task.id,true)} onMouseLeave={()=>showCheckMark(task.id)}
        draggable
        onDrag={(event) => onDrag(event, task.id)}
      >

            <div className="p-2 d-flex justify-content-between align-items-center">
                <span className="mb-0 d-flex align-items-center">
                    {task.title}
                    {(showCheck.show && showCheck.id == task.id) &&
                        <span role="button" className="fs-5 ms-2 text-success" onClick={()=> makeTaskCompleted(task.id)}>
                            <FontAwesomeIcon icon={faCircleCheck}/>
                        </span>
                    }
                </span>
                <div className="mx-3 d-flex align-items-center">
                <div className="btn-group">
                <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Change Status
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={() => changeStatus(task.id,AllSection.backlog)} >Backlog</li>
                    <li className="dropdown-item" onClick={() => changeStatus(task.id,AllSection.inProgress)}>In Progress</li>
                    <li className="dropdown-item" onClick={() => changeStatus(task.id,AllSection.done)}>Done</li>
                </ul>
                </div>
                    <Link className="" method="delete" href={`/todo/${task.id}`} as="button"><FontAwesomeIcon icon={faTrashCan} /></Link>
                </div>
            </div>
        </div>
        )
    } else {
       return <div className="card my-2">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <span className="mb-0 d-flex align-items-center">
                        <span role="button" className="fs-5 me-2 text-success" onClick={()=> makeTaskCompleted(task.id,false)}>
                            <FontAwesomeIcon icon={completed}/>
                        </span>
                   <del> {task.title} </del>
                </span>
            </div>
        </div>
    }
}
