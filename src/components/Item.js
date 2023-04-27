import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';

function Item(props) {
    return (
        
    <Container>
        <Row>
            <Container>
                <Figure>
                    <Figure.Image
                         width={171}
                        height={180}
                        alt="171x180"
                        src={props.image}
                    />
                    <Figure.Caption>
                        {props.title}
                    </Figure.Caption>
                </Figure>
                <Row>{'$'}{props.price}</Row>
                <Row>{props.description}</Row>
                <Row>{props.category}</Row>
            </Container>
        </Row>     
    </Container>
    );
}

/* 
todo:
Make figure a link and show description on hover/click
*/
export default Item;