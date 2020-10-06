import React from 'react';
import Title from './Title';

const Navbar = ({navTitle, username}) => (

    <nav>
        <Title navTitle={navTitle} />

        <div id="username">
            <h2>{username}</h2>
        </div>
    </nav>

);

export default Navbar;