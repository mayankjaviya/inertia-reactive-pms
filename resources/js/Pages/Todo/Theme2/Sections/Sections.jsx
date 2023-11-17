import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import Task from "../../Theme2/Task";
import AddTask from "../../AddTask";

export default function Sections(props) {
    const {
        tasks,
        setDraggedTaskId,
        section,
        sectionName,
        onDrop,
        onDragOver,
    } = props;

    const [addNewTask, setAddNewTask] = useState({ [section]: false });
    const showNewTask = (section, show = false) => {
        setAddNewTask({
            [section]: show,
        });
    };

    return (
        <div
            className="m-1 shadow shadow-md py-3 p-1 rounded border-end border-top bg-light"
            style={{ minHeight: "600px" }}
            onDrop={(event) => onDrop(event, section)}
            onDragOver={(event) => onDragOver(event)}
        >
            <h4 className="text-center text-success" role="button">
                {sectionName}{" "}
                <span
                    className="ms-2"
                    onClick={() => showNewTask(section, !addNewTask[section])}
                >
                    <FontAwesomeIcon
                        className="text-success"
                        icon={faSquarePlus}
                    />
                </span>
            </h4>
            {addNewTask[section] && (
                <AddTask section={section} hideNewTaskCard={showNewTask} />
            )}
            {tasks[section] ? (
                tasks[section].map((task) => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            currentSection={section}
                            draggedTaskId={setDraggedTaskId}
                        />
                    );
                })
            ) : (
                <div className="d-flex justify-content-center align-items-center ">
                    <strong className="py-3 fs-5">No Task Here</strong>
                </div>
            )}
        </div>
    );
}
