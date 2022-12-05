import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Lobby(props) {
    const hreflink = '/lobby/' + props.id;

    return (
        <ListGroup.Item>
            <Link className="li-el" to={hreflink}><Button variant="dark" size="lg">{props.name}</Button>{' '}</Link>
        </ListGroup.Item>

    )
}