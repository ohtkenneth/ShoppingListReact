import React, { Component } from 'react';

export default function Header() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="nav-link" href="#">Recipe Book</a>
            <a className="nav-link" href="#">Recipes</a>
            <a className="nav-linkr" href="#">Shopping List</a>
        </nav>
    )
}