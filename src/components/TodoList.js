import React from 'react';
import { ListGroup, Tab, Row, Col } from 'react-bootstrap';

function TodoList({ todos }) {
  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 7) return 'primary';
    if (diffDays <= 7 && diffDays > 4) return 'success';
    if (diffDays <= 4 && diffDays > 2) return 'warning';
    return 'danger';
  };

  return (
    <Tab.Container defaultActiveKey="#link0">
      <Row>
        <Col sm={4}>
          <ListGroup>
            {todos.map((todo, index) => (
              <ListGroup.Item
                action
                href={`#link${index}`}
                variant={getVariant(todo.dueDate)}
                key={index}
              >
                {todo.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {todos.map((todo, index) => (
              <Tab.Pane eventKey={`#link${index}`} key={index}>
                <h5>{todo.title}</h5>
                <p>{todo.description}</p>
                <p>
                  <strong>Due Date:</strong> {new Date(todo.dueDate).toLocaleDateString()}
                </p>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TodoList;
