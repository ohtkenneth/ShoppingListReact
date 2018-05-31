import React, { Component } from 'react';
import RecipeList from './recipe-list';

export default class Recipes extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <RecipeList />
        )
    }
}
