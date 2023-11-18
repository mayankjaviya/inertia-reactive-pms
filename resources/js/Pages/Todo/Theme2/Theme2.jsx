import React from "react";
import Sections from "./Sections/Sections";
import Completed from "./Sections/Completed";

export default function Theme2(props) {
    const {
        tasks,
        setDraggedTaskId,
        AllSection,
        onDragOver,
        onDrop,
        completedTasks,
    } = props;
    return (
        <div className="row">
            <div className="col-sm-3 px-1 ">
                <Sections
                    tasks={tasks}
                    setDraggedTaskId={setDraggedTaskId}
                    section={AllSection.backlog}
                    sectionName="Backlog"
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                />
            </div>
            <div className="col-sm-3 px-1">
                <Sections
                    tasks={tasks}
                    setDraggedTaskId={setDraggedTaskId}
                    section={AllSection.inProgress}
                    sectionName="In Progress"
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                />
            </div>
            <div className="col-sm-3 px-1">
                <Sections
                    tasks={tasks}
                    setDraggedTaskId={setDraggedTaskId}
                    section={AllSection.done}
                    sectionName="Done"
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                />
            </div>

            {/* Completed Task */}
            <div className="col-sm-3 px-1">
                <Completed completedTasks={completedTasks} />
            </div>
        </div>
    );
}
