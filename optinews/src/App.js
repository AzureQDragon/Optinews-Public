import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import NewsCard from './Components/NewsCard';
import './App.css';

function App() {
  return (
    <div className='Body'>
      <NavBar />
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
