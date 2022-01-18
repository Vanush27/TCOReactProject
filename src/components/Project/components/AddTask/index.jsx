import React, {useCallback, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import FormComponent from "../AddTask/Form";

const AddTask = ({
                     onHide,
                     onSubmit,
                     modalShow,
                     editItem,
                     setMockTasks,
                     setModalShow,
                     error
                 }) => {

    const [formData, setFormData] = useState([]);
    const [data, setData] = useState(editItem);


    const handleChange = useCallback((e) => {
        const {value, name} = e.target;

        setFormData((prevData => {

            const newTask = {
                ...prevData,
                touched: true,
                id: Math.random(),
                [name]: value,
                status: "Active",

            };
            return newTask;
        }));

    }, []);

    const editData = () => {


        const localData = localStorage.getItem('data')
        const parse = JSON.parse(localData)
        if (parse) {
            const test = parse.map(el => {
                if (el.id === data.id) {
                    el = data;
                }
                return el;
            })
            localStorage.setItem('data', JSON.stringify(test))
            setMockTasks(test);
            setModalShow(false)
        }
    }

    return (
        <>
            <Modal
                size="lg"
                show={modalShow}
                onHide={onHide}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {!editItem && "Add Task"}
                        {editItem && "Edit Task"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormComponent
                        formData={formData}
                        handleChange={handleChange}
                        editItem={editItem}
                        editData={editData}
                        data={data}
                        setData={setData}
                    />
                    {error && <div className="text-danger">All fields is required</div>}
                </Modal.Body>
                <Modal.Footer>

                    {!editItem && <Button
                        variant="primary"
                        type="submit"
                        onClick={() => onSubmit(formData)}
                    >
                        Add
                    </Button>}

                    {editItem && <Button
                        variant="primary"
                        type="submit"
                        onClick={editData}
                    >
                        Edit

                    </Button>}
                    <Button
                        onClick={onHide}
                        variant="secondary"
                    >
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );

}

export default AddTask;