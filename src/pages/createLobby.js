import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import {
    Container,
    Form,
    Button,
    Row,
    Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CreateLobby() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const usedNames = [];

    useEffect(() => {
        fetch("http://127.0.0.1:8000/rooms")
            .then((response) => response.json())
            .then((data) => {
                data.roomsData.forEach(element => usedNames.push(Object.values(element)[0]))
            })
    }, [])

    function onSubmit(data) {
        fetch("http://127.0.0.1:8000/create/room", {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(response => response.json())
    }

    return (
        <Container className="my-4">
            <div className="data">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Создать лобби</Form.Label>
                        <Form.Control
                            placeholder="Название лобби"
                            {...register("name")}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    )
}
