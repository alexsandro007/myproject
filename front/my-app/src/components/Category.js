import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Col,Card, CardGroup} from 'react-bootstrap';
import moment from 'moment';

function Category(props) {
  const [data, setData] = useState([]);
  const tag = props.location.pathname.slice(1)
  useEffect(() => {
      axios.get( `http://localhost:3000/category/${tag}`)
      .then((response) => {
          setData(response.data);
        }).catch(function(error){
            console.log(error)
        })
  }, [tag]);
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
          <small className="text-muted">Last updated {moment(p.date).startOf('hour').fromNow()}</small>
        </Card.Footer>
      </Card>
    </Col>)}
  </CardGroup>    )

}

export default Category
