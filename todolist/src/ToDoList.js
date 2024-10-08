// Create Display of ToDo List

import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import todoItems from './todoItems'; 
import './ToDoList.css';   

   
const ToDoList = () => {
    
    // By default, the first item in the list is selected (selectedItem)
    const [selectedItem, setSelectedItem] = useState(todoItems[0]);

    // Add color coding to the list of ToDo Items based on due date
    const getVariant = (dueDate) => {
        const today = new Date();
        const due = new Date(dueDate);
        const timeDiff = due - today;
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff > 7) return 'primary';
        if (daysDiff >= 4) return 'success';
        if (daysDiff >= 2) return 'warning';
        return 'danger';  
    }
      
    return (
        <Tab.Container>
            <Row>

                {/* List of ToDo Item in Left Column */}
                <Col md={4}>
                <ListGroup>
                    {todoItems.map(item => (
                        <ListGroup.Item
                            className='tabitem'
                            key={item.title}
                            eventKey={item.title}
                            variant={getVariant(item.dueDate)}
                            onClick={() => setSelectedItem(item)}>
                            {item.title}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                </Col>

                {/* Display of Selected ToDo Item in Right Column */}
                <Col md={8}>
                <Tab.Content>
                    <Tab.Pane eventKey={selectedItem.title}>
                        <p contentEditable>{selectedItem.description}</p>
                        <p><input type="date" value={selectedItem.dueDate} /></p>
                    </Tab.Pane>
                </Tab.Content>
                </Col>

            </Row>
        </Tab.Container>
    );

}

export default ToDoList;
