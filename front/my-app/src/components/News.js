import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Col,Card, CardGroup} from 'react-bootstrap'

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get( `http://localhost:3000/posts`)
      .then((response) => {
          setData(response.data);
        }).catch(function(error){
            console.log(error)
        })
  });
  return (
    <CardGroup className="news">
      {data.map(p=>
    <Col>
        <Card key={p.id}>
        <Link className="title" to={`/post/${p.id}`}>
        <Card.Img variant="top" src={p.photo} className="posti" />
        <Card.Body>
          <Card.Title className="title">{p.title}</Card.Title>
        
        </Card.Body>
        </Link>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>)}
  </CardGroup>    )

}

export default News
