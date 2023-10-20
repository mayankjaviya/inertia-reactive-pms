import { faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import { AllSection } from "../Keys";
import { router } from "@inertiajs/react";

export default function Todo(props) {

    const { tasks,completedTasks } = props;
    const [ addNewBackLog, setAddNewBackLog ] = useState(false);
    const [ addNewInProgress, setAddNewInProgress ] = useState(false);
    const [ addNewDone, setAddNewDone ] = useState(false);
    const [ draggedTaskId, setDraggedTaskId ] = useState();

    const showNewTask = (section = null) => {
        setAddNewDone(false);
        setAddNewInProgress(false);
        setAddNewBackLog(false);

        if(section === 'backlog') {
            setAddNewBackLog(!addNewBackLog);
        } else if(section === 'inProgress') {
            setAddNewInProgress(!addNewInProgress);
        }   else if(section === 'done') {
            setAddNewDone(!addNewDone);
        }
    }


    const onDragOver = (event) => {
        event.preventDefault();
      }

    const onDrop = (event, section ) => {
        event.preventDefault();
        router.put(`/todo/${draggedTaskId}`, {
            section : section
        });
      }


    return (
        <div className="container mt-5">
            <h1 className="text-center text-success">Todo Lists</h1>
        <div className="row">
            <div className="backlog m-2"
        onDrop={event => onDrop(event,AllSection.backlog )}
        onDragOver={(event => onDragOver(event))}>
                <h4 className=" text-success" role="button">Backlog <span className="ms-2" onClick={() => showNewTask("backlog")}><FontAwesomeIcon className="text-success" icon={faSquarePlus}/></span></h4>
                {addNewBackLog && <AddTask section="backlog" hideNewTaskCard={showNewTask} />}
                {tasks[AllSection.backlog]?.map((task) => {
                    return <Task key={task.id} task={task} currentSection={AllSection.backlog} draggedTaskId={setDraggedTaskId}/>
                })}
            </div>
            <div className="in-progress m-2"
        onDrop={event => onDrop(event,AllSection.inProgress )}
        onDragOver={(event => onDragOver(event))}>
                <h4 className=" text-success" role="button">In Progress <span className="ms-2" onClick={() => showNewTask("inProgress")}><FontAwesomeIcon icon={faSquarePlus}/></span></h4>
                {addNewInProgress && <AddTask section="inProgress" hideNewTaskCard={showNewTask}/>}
                {tasks[AllSection.inProgress]?.map((task) => {
                    return <Task key={task.id} task={task} currentSection={AllSection.inProgress}  draggedTaskId={setDraggedTaskId}/>
                })}
            </div>
            <div className="done m-2"
        onDrop={event => onDrop(event,AllSection.done )}
        onDragOver={(event => onDragOver(event))}>
                <h4 className=" text-success" role="button">Done <span className="ms-2" onClick={() => showNewTask("done")}><FontAwesomeIcon icon={faSquarePlus}/></span></h4>
                {addNewDone && <AddTask section="done" hideNewTaskCard={showNewTask}/>}
                {tasks[AllSection.done]?.map((task) => {
                    return <Task key={task.id} task={task} currentSection={AllSection.done}  draggedTaskId={setDraggedTaskId}/>
                })}
            </div>

            {/* Completed Task */}
            {completedTasks.length > 0 &&
                <div className="m-2" >
                    <h4 className="text-success" role="button">Completed</h4>
                    {completedTasks.map((task) => {
                        return <Task key={task.id} task={task} isCompleted={true}/>
                    })}
                </div>
            }
        </div>
        </div>
    );
}
