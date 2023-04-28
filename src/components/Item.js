import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
    return (
    <Card className='p-3 m-3' style={{ width: '18rem' }} border="secondary">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>${props.price}</Card.Subtitle>
        <Card.Text>
            {props.category}
            <br />{props.description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button><br />
      </Card.Body>
    </Card>
  );
}

/*
 
todo:
Make figure a link and show description on hover/click
Align items
*/
export default Item;