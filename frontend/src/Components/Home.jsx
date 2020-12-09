import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import NewsCard from './NewsCard';

import '../App.css';

function Home() {
    const [currentFeatured, setCurrentFeatured] = React.useState(null);
    React.useEffect(() => {console.log(currentFeatured)}, [currentFeatured]);
    return (
      <div className='Body'>
        <NavBar feature={currentFeatured} setFeature={setCurrentFeatured}/>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col>
            <div id='news-container'>
              <NewsCard feature={currentFeatured}/>
            </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
}

export default Home;