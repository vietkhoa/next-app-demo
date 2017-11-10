import React from 'react';
import Link from 'next/link'
import Head from 'next/head'

import { connect } from 'react-redux';

const Layout = ({ children }) => {

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
                            <Link href='/test' as ='/about'>
                                <a> About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/userlist' as ='/user'>
                                <a> User</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/adminlist' as='/admin'>
                                <a>Admin</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {children}

        </div>
    );
};


export default Layout;
