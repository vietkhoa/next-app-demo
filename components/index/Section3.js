import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import CardFilm from '../CardFilm'
import Link from 'next/link'
import films from "../../datas/category1"

export default class Section2 extends React.Component {

    renderFilms() {

        return this.props.movies.category1.map(item => (
            <CardFilm key={item.title} item={item} style={{ margin:10}} />
        ))
    }

    render() {
        const { category } = this.props
        return (
            <div>
                <div className="row">
                    {!category &&
                        <Link href={`/category?id=${1}`} as={`/categories/${1}`}>
                            <a>Category 1</a>
                        </Link>
                    }
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                        {this.renderFilms()}
                        </div>
                    </div>
                    <div className="col">
                        1 of 3
                    </div>
                </div>
            </div>
        )
    }
}

