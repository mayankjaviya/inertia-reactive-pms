import React, {  useState } from "react";
import { AllSection } from "../Keys";
import { Head, router } from "@inertiajs/react";
import Theme1 from "./Theme1/Theme1";
import Theme2 from "./Theme2/Theme2";

export default function Main(props) {
    const { tasks, completedTasks } = props;
    const [draggedTaskId, setDraggedTaskId] = useState();
    const [layout, setLayout] = useState(1);

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event, section) => {
        event.preventDefault();
        router.put(`/todo/${draggedTaskId}`, {
            section: section,
        });
    };

    const changeLayout = () => {
        setLayout(layout == 1 ? 2 : 1);
    };

    return (
        <div className="mx-5">
            <Head title="IR PMS - Home" />
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="text-center text-success">Todo List</h1>
                <div className="align-items-center">
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="themeSwitch"
                            onChange={changeLayout}
                            checked={layout == 2}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="themeSwitch"
                        >
                            Change Theme
                        </label>
                    </div>
                </div>
            </div>

            {layout == 1 && (
                <Theme1
                    tasks={tasks}
                    setDraggedTaskId={setDraggedTaskId}
                    AllSection={AllSection}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    completedTasks={completedTasks}
                />
            )}
            {layout == 2 && (
                <Theme2
                    tasks={tasks}
                    setDraggedTaskId={setDraggedTaskId}
                    AllSection={AllSection}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    completedTasks={completedTasks}
                />
            )}
        </div>
    );
}
