import React from "react";
import Task from "../../Theme1/Task";

export default function Completed(props) {
    const { completedTasks } = props;
    return (
        <>
            {completedTasks.length > 0 && (
                <div className="m-1 shadow shadow-md py-3 p-1 rounded border-end border-top bg-light">
                    <h4 className=" text-center text-success" role="button">
                        Completed
                    </h4>
                    {completedTasks.map((task) => {
                        return (
                            <Task
                                key={task.id}
                                task={task}
                                isCompleted={true}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}
