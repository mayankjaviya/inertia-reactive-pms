import React from "react";
import Sections from "./Sections/Sections";
import Completed from "./Sections/Completed";

export default function Theme1(props) {
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
            <Sections
                tasks={tasks}
                setDraggedTaskId={setDraggedTaskId}
                section={AllSection.backlog}
                sectionName="Backlog"
                onDragOver={onDragOver}
                onDrop={onDrop}
            />
            <Sections
                tasks={tasks}
                setDraggedTaskId={setDraggedTaskId}
                section={AllSection.inProgress}
                sectionName="In Progress"
                onDragOver={onDragOver}
                onDrop={onDrop}
            />
            <Sections
                tasks={tasks}
                setDraggedTaskId={setDraggedTaskId}
                section={AllSection.done}
                sectionName="Done"
                onDragOver={onDragOver}
                onDrop={onDrop}
            />

            {/* Completed Task */}
            <Completed completedTasks={completedTasks} />
        </div>
    );
}
