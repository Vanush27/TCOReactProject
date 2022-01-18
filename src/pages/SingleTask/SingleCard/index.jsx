import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./styles.css";

const SingleCard = ({data}) => {
    return (
        <div className="card_single">

            <Card border="info" className="card_single_info">
                <Card.Header className="card_single_header">
                    <Link to={`/project/`}>
                        {data.title}
                    </Link>

                </Card.Header>

                <Card.Body>
                    <Card.Title className="must-do-text">Must do : {data.attachedTo}</Card.Title>
                    <Card.Text>
                        Description: {data.description}
                    </Card.Text>
                    <Card.Text className="status-text">
                        Status:
                        <span>
                        &nbsp;{data.status}
                    </span>
                    </Card.Text>
                    <Card.Text>
                        Date : {data.date}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleCard;