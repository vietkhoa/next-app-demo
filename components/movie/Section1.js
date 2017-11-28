import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

export default class Section1 extends React.Component {

    renderCarousels(){
        return carousels.carousels.map( item => (
            <img key={item} src={item}/>
        ))
    }

    render() {
        const { movie } = this.props
        return (
            <Container>
                <Row>
                    <img src={movie.img}/>
                </Row>
            </Container>
        )
    }
}

