import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <h4>Logo</h4>
            <nav className={'nav'}>
                <Link className={'nav-link'} to="/">Home</Link>
                <Link className={'nav-link'} to="/popuar">Popular</Link>
                <Link className={'nav-link'} to="/about">About</Link>
            </nav>
            <div className={'search-wrapper'}>
                <input type="text" placeholder={'start type '}/>
                <button>Search</button>
            </div>
        </header>
    );
};

export default Header;