import React, {useCallback, useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";
import "./styles.css";

import {idGenerator} from "./components/helpers/globalFunctions";

const Project = () => {

    const [modalShow, setModalShow] = useState(false);

    const [mockTasks, setMockTasks] = useState([]);

    const [editItem, setEditItem] = useState();

    const [error, setError] = useState(false);


    const handleOpenAddTaskModal = () => {
        setEditItem(null);
        setModalShow(true);
    }
    const handleCloseAddTaskModal = () => {
        setModalShow(false);
        setError(false);
    }


    const handleEdit = (id) => {
        const editData = localStorage.getItem('data');
        const parseEditData = JSON.parse(editData);
        if (parseEditData) {

            // eslint-disable-next-line array-callback-return
            parseEditData.map((item) => {
                if (item.id === id) {
                    setEditItem(item);
                    setModalShow(true);
                }
            });
        }

    }

    const handleDeleteTask = useCallback((id) => {

        const localDataDelete = localStorage.getItem('data');
        const newData = JSON.parse(localDataDelete).filter(item => item.id !== id);
        localStorage.setItem('data', JSON.stringify(newData));

        setMockTasks(newData);

    }, []);


    const toggleStatusChange = useCallback((id) => {

        setMockTasks((prevData) => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            const status = copyData[idx].status.toLowerCase() === "active" ? "Done" : "Active";

            copyData[idx] = {
                ...copyData[idx],
                status
            }
            setTasksToDB(copyData);
            return copyData;
        });

    }, []);

    const setNewTaskToDB = (task) => {
        const tasks = JSON.parse(localStorage.getItem("data"));
        tasks.push(task);
        localStorage.setItem("data", JSON.stringify(tasks));
    }


    const setTasksToDB = (tasks) => {
        localStorage.setItem("data", JSON.stringify(tasks));
    }


    const addTask = (formData) => {

        const {title, description, attachedTo} = formData;
        if (title?.length > 0 && description?.length > 0 && attachedTo?.length > 0) {
            setError(false);

            setMockTasks((prevData => {
                const copyData = [...prevData];
                const newTask = {
                    id: idGenerator(),
                    title: title,
                    date: new Date().toISOString().slice(0, 10),
                    description: description,
                    status: "Active",
                    attachedTo: attachedTo
                }
                setNewTaskToDB(newTask);
                copyData.push(newTask);
                return copyData;
            }));

            handleCloseAddTaskModal();
        } else {

            setError(true);

        }
    }

    useEffect(() => {
        const tasks = localStorage.getItem("data");
        if (!tasks)
            localStorage.setItem("data", JSON.stringify([]));
        else
            setMockTasks(JSON.parse(tasks));

    }, []);

    return (
        <div className="project-container">
            <h1 className="heading1">
                Todo Project
            </h1>
            <Button className="add_btn"
                    onClick={handleOpenAddTaskModal}
            >
                Add Task
            </Button>

            <Todo
                mockTasks={mockTasks}
                handleDeleteTask={handleDeleteTask}
                toggleStatusChange={toggleStatusChange}
                setModalShow={setModalShow}
                handleEdit={handleEdit}
            />

            {modalShow && <AddTask
                onHide={handleCloseAddTaskModal}
                onSubmit={addTask}
                modalShow={modalShow}
                setModalShow={setModalShow}
                editItem={editItem}
                setMockTasks={setMockTasks}
                handleEdit={handleEdit}
                error={error}
            />}
        </div>
    )
}
export default Project;