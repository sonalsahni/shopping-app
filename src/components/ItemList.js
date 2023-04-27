import React from 'react';
import { Container } from 'react-bootstrap';
import Item from './Item';

function ItemList(props) {
    return(
        <Container>
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
        </Container>
    );
}

export default ItemList;