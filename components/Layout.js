import React from 'react';
import Link from 'next/link'
import Head from 'next/head'

import { connect } from 'react-redux';

const Layout = ({ children, auth }) => {

    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
      ) : (
        <a href="/api/auth/google">Login</a>
      );
    

    return (
        <div>
            <nav>
                <Head>
                    <title>This page has a title 🤔</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" />
                </Head>

                <div className="nav-wrapper">
                    <Link href='/' >
                        <a className="brand-logo">React SSR</a>
                    </Link>
                    <ul className="right">
                        <li>
                            <Link href='/about' as ='/about'>
                                <a> About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/user' as ='/user'>
                                <a> User</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin' as='/admin'>
                                <a>Admin</a>
                            </Link>
                        </li>
                        <li>{authButton}</li>
                    </ul>
                </div>
            </nav>

            {children}

        </div>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
  }
  
export default connect(mapStateToProps)(Layout);
