import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {articles} from './articles';

function NewsCard () {
  return (
    <>
      <div className="news-container">
        {articles.map((data, key) => {
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

export default NewsCard;
