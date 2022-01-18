import React, {memo} from "react";
import Task from "../Task";
import "./styles.css";

const Todo = ({
                  mockTasks,
                  handleDeleteTask,
                  toggleStatusChange,
                  setModalShow,
                  handleEdit
              }) => {
    return (
        <div className="tasks-wrapper">
            {mockTasks.length > 0 && mockTasks.map((task, index) => (
                <Task
                    index = {index+1}
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
                    toggleStatusChange={toggleStatusChange}
                    setModalShow={setModalShow}
                    handleEdit={handleEdit}
                    {...task}
                />
            ))}
        </div>
    )
}

export default memo(Todo);