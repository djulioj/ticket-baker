import React from "react";
import '../Styles/EventCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function EventCard(props) {
  return (
    <div className="container-card">
        <Card style={{ width: '18rem'}}>
            <img className="image" src={`${props.image}.png`} />
            <Card.Body>
                <Card.Title><b>{props.name}</b></Card.Title>
                <hr />
                <Card.Text >
                <b>Fecha: </b>{props.date}
                </Card.Text>
                <Card.Text>
                <b>Precio: </b>${props.price}
                </Card.Text>
                <Card.Text>
                <b>Lugar: </b>{props.place}
                </Card.Text>
                <Button variant="primary" className="buy" >Comprar</Button>
                <Button variant="primary" className="less" >-</Button>
                <p className="quantity">0</p>
                <Button variant="primary" className="more" >+</Button> 
            </Card.Body>
        </Card>
    </div>
    
  );
}

export default EventCard;

