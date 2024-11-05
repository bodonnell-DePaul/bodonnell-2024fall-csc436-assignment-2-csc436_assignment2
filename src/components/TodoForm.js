import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && dueDate) {
            addTodo({ title, description, dueDate });
            setTitle('');
            setDescription('');
            setDueDate('');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3" style={{ backgroundColor: '#2ECC71' }}>
            <Form.Group controlId="formTodoTitle">
                <Form.Label>ToDo Item</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Add todo item"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formTodoDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Add todo description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formTodoDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Todo
            </Button>
        </Form>
    );
}

export default TodoForm;
