import React from "react";
import {Form} from "react-bootstrap";
import {formDataAddTask} from "../../../data/mockData";

const FormComponent = ({editItem, handleChange, data, setData}) => {

    return (
        <Form>
            {!editItem && formDataAddTask.map((input, index) => {
                return <Form.Group className="mb-3" key={index}>
                    <Form.Label> {input.label}</Form.Label>

                    <Form.Control
                        type="text"
                        name={input.name}
                        value={input.value}
                        onChange={handleChange}
                    />
                </Form.Group>
            })}

            {editItem && data && formDataAddTask.map((input, index) => {
                return <Form.Group className="mb-3" key={index}>
                    <Form.Label> {input.label}</Form.Label>

                    <Form.Control
                        type="text"
                        name={data[input.label]}
                        value={data[input.name]}
                        onChange={(e) => {
                            setData({
                                ...data,
                                [input.name]: e.target.value
                            })
                        }
                        }
                    />
                </Form.Group>
            })}
        </Form>
    );

}

export default FormComponent;

