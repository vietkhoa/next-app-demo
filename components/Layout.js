import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { Navbar } from 'reactstrap';

import { connect } from 'react-redux';

const Layout = ({ children, auth }) => {

    const authButton = auth ? (
        <a className="nav-link" href="/api/logout">Logout</a>
    ) : (
            <a className="nav-link" href="/api/auth/google">Login</a>
        );


    return (
        <div>
            {/* <nav> */}
            <Head>
                <title>This page has a title 🤔</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous" />
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js" />
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/16.1.1/cjs/react.development.js" />
                <script type="text/javascript" src="https://unpkg.com/react-transition-group@2.2.1/dist/react-transition-group.min.js" />
            </Head>


            <nav class="navbar navbar-dark bg-dark navbar-expand-lg" >
                <Link href='/' >
                    <a className="navbar-brand">React SSR</a>
                </Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href='/test' as='/about'>
                            <a className="nav-link"> About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/userlist' as='/user'>
                            <a className="nav-link"> User</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/adminlist' as='/admin'>
                            <a className="nav-link">Admin</a>
                        </Link>
                    </li>
                    <li className="nav-item">{authButton}</li>
                </ul>
            </nav>

            <div className="container-fluid">
            {children}
            </div>

        </div>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Layout);
