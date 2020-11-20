import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useState, useEffect, setState} from "react";
import './newscard.css';

function NewsCard () {
  const [hasError, setErrors] = useState(false);
  const  [articles,setArticles]= useState([])
 
  async function fetchData() {
    const res = await fetch("http://127.0.0.1:5000/articles");
    res
      .json()
      .then(res => setArticles(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  console.log(articles['articles']);

  return (
    <>
      <div className="news-container">
        {articles["articles"] && articles["articles"].map((data, key) => {
          return (
            <div key={key}>
              <News
              key={key}
              title={data.title}
              description={data.description}
              url={data.url}
              tags={data.tags.map((tag) => {
                return (
                  <Button href={tag} variant='outline-secondary'>{tag}</Button>
                )
              })}
            />
            </div>
          );
        })}
      </div>
    </>
  );
};

const News = ({title, description, url, tags}) => {
  if (!title) return <div />
  return (
    <div>
      <Card style={{ width: '60rem', fontFamily: 'Oxygen' }} className='mt-4 cards'>
        <Card.Body>
          <Card.Title style={{ fontFamily: 'Oxygen', fontWeight: 'bold' }}>{title}</Card.Title>
          <Card.Text style={{ fontFamily: 'Oxygen' }}>
          {description}
          </Card.Text>
          <Button variant='primary' href={url}>View full article</Button>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup id='tags'>
            {tags}
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>
  );
}



export default NewsCard;
