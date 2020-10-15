import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function FilterCard() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant='flush'>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default FilterCard;
