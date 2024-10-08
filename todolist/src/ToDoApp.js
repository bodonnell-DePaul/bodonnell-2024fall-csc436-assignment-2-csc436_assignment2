// Shereen Fahrai

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import './ToDoApp.css';

const ToDoApp = () => {
    return (
        <Container fluid>
            <h1 className='header'>Assignment 2: Shereen's ToDo List</h1>
            <br />
            <br />
            <Row>
                <Col md={4}><ToDoForm /></Col>
                <Col md={8}><ToDoList /></Col>
            </Row>
        </Container>
    );
}

export default ToDoApp;