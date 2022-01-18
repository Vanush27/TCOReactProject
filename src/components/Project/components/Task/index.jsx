import React, {memo} from "react";
import "./styles.css";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Task = ({
                  id,
                  index,
                  title,
                  description,
                  status,
                  attachedTo,
                  handleDeleteTask,
                  toggleStatusChange,
                  handleEdit,
                  date
              }) => {

    const statusClassName = status === "done" ? "status-done" : "status-active";
    const statusBtn = status === "done" ? "Active" : "Done"


    return (

        <div className="bigDiv">
            <Card className="card">
                <Card.Body>
                    <div className="title-card">
                        <Card.Title className="title-card-left">
                            <Link to={`/task/${id}`}>
                                Title: {title}
                            </Link>
                        </Card.Title>
                        <Card.Title className="title-card-right">
                            {index}
                        </Card.Title>
                    </div>

                    <Card.Title className="must-do-text">Must do : {attachedTo}</Card.Title>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                    <Card.Text className="status-text">
                        Status:
                        <span className={statusClassName}>
                        &nbsp;{status}
                    </span>
                    </Card.Text>
                    <Card.Text>
                        Date : {date}

                    </Card.Text>

                    <div className="btns">
                        <Button variant="danger mr-2" className="m-2"
                                onClick={() => handleDeleteTask(id)}
                        >
                            Delete
                        </Button>
                        <Button variant="warning mr-2" className="m-4" onClick={() => handleEdit(id)}>Edit</Button>
                        <Button
                            variant={`${statusBtn === "Active" ? "success" : "primary"} `}
                            onClick={() => toggleStatusChange(id)}
                        >
                            {statusBtn}
                        </Button>

                    </div>

                </Card.Body>
            </Card>

        </div>


    )
}

export default memo(Task);