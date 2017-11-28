import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Link from 'next/link'

export default class CardFilm extends React.Component {

    render() {
        const { img, author, title, views, id } = this.props.item
        return (
            <div style={this.props.style}>
                <div>
                    <Link href={`/movie?id=${id}`}  as={`/movies/${title}`}>
                        <img src={img} />
                    </Link>
                </div>
                <div>
                    <span>{author} <br /></span>
                    <span>{title} <br /></span>
                    <span>{views} <br /></span>
                </div>
            </div>
        )
    }
}