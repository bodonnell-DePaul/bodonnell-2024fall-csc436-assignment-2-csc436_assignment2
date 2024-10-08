// Create the Form Component

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ToDoForm.css';

const ToDoForm = () => {
    return (
        <Form className='todoform'>
            <Form.Group controlId = "formTitle">
                <Form.Label>ToDo Item</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Add todo item" 
                />
            </Form.Group>
            <br />
            
            <Form.Group controlId = "formDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Button className='todobtn' variant="primary" type="submit">
                Add Todo
            </Button>
        </Form>
    );
};

export default ToDoForm;