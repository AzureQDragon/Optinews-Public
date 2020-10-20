import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect, setState} from "react";

const Articles = ()  => {
  const [hasError, setErrors] = useState(false);
  const  [articles,setArticles]= useState({})
 
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

console.log(JSON.stringify(articles));
return (<div>{JSON.stringify(articles)}</div>);
}


function NewsCard () {
  return (
    <>
      <div className="news-container">
        {Articles.map((data, key) => {
          return (
            <div key={key}>
              <News
              key={key}
              title={data.title}
              description={data.description}
              url={data.url}
            />
            </div>
          );
        })}
      </div>
    </>
  );
};

const News = ({title, description, url}) => {
  if (!title) return <div />
  return (
    <div>
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant='primary' href={url}>View full article</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Articles;
