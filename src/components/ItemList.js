import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Item from './Item';

function ItemList(props) {
    return(
        <Container fluid>
            <Row className='m-3 p-3 justify-content-evenly'>
            {
                props.item.map(
                    item => (
                        
                        <Item 
                            key={ item.id}
                            title={ item.title}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            image={item.image}   />
                        
                    )
                )
            }
            </Row>
        </Container>
    );
}

export default ItemList;