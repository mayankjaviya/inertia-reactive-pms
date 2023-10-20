import React, {  useState } from "react";
import { AllSection } from "../Keys";
import { Head, router } from "@inertiajs/react";
import Sections from "./Sections/Sections";
import Completed from "./Sections/Completed";

export default function Main(props) {

    const { tasks,completedTasks } = props;
    const [ draggedTaskId, setDraggedTaskId ] = useState();

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
        <div className="container">
            <Head title="IR PMS - Home" />
            <h1 className="text-center text-success">Todo List</h1>
        <div className="row">
            <Sections tasks={tasks} setDraggedTaskId={setDraggedTaskId} section={AllSection.backlog} sectionName="Backlog"  onDragOver={onDragOver} onDrop={onDrop}/>
            <Sections tasks={tasks} setDraggedTaskId={setDraggedTaskId} section={AllSection.inProgress} sectionName="In Progress" onDragOver={onDragOver} onDrop={onDrop}/>
            <Sections tasks={tasks} setDraggedTaskId={setDraggedTaskId} section={AllSection.done} sectionName="Done" onDragOver={onDragOver} onDrop={onDrop}/>

            {/* Completed Task */}
            <Completed completedTasks={completedTasks}/>
        </div>
        </div>
    );
}
