import React from "react";
import Task from "../Task";

export default function Completed(props)
{
    const { completedTasks } = props;
    return (
        <>
            {completedTasks.length > 0 &&
            <div className="m-2 border-top pt-4 shadow shadow-md" >
                    <h4 className="text-success" role="button">Completed</h4>
                    {completedTasks.map((task) => {
                        return <Task key={task.id} task={task} isCompleted={true}/>
                    })}
                </div>
            }
        </>
    )
}
