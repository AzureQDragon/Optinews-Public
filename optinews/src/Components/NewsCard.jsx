import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect, setState} from "react";
import './newscard.css';

function NewsCard (props) {
  const [hasError, setErrors] = useState(false);
  const [articles,setArticles]= useState([])
  const [filteredArticles,setFilteredArticles]= useState([])

 
  async function fetchData() {
    const res = await fetch("http://127.0.0.1:5000/articles");
    res
      .json()
      .then(res => {
        setArticles(res)
      })
      .catch(err => setErrors(err));
  }    
  console.log(props.feature);


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(articles["articles"]);
  }, [articles["articles"]]);

  useEffect(() => {

    console.log("hi");

    if (articles["articles"]) {
      const filteredArticlesTemp = articles["articles"].filter((e) => e.title.includes(props.feature))
      setFilteredArticles({"articles": filteredArticlesTemp})
    }
  }, [props.feature])

  useEffect(() => {
    if (!props.feature) {
      setFilteredArticles(articles)
    }
  }, [articles["articles"], props.feature]);
  return (
    <>
      <div className="news-container">
        {filteredArticles["articles"] && filteredArticles["articles"].length > 0 ? filteredArticles["articles"].map((data, key) => {
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
        }): <h2 style={{padding: "10vh 0", width: "100%", textAlign: "center", display: "block", color: "black"}} 
>No Results</h2>}
      </div>
    </>
  );
};

const News = ({title, description, url}) => {
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
      </Card>
    </div>
  );
}

export default NewsCard;
