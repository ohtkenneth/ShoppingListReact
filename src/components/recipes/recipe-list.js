import React, { Component } from 'react';
import Recipe from './recipe';

// need to render an array of recipe objects
// map the state.recipes to li html tags

export default function RecipeList() {
    let recipes = [
        {
            name: 'Test recipe',
            description: 'test recipe desc',
            imagePath: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        }
    ];

    return (
        <div>
            <button className="btn btn-success">New Recipe</button>
            <h1>Recipe list</h1>
            <ul>
                {
                    recipes.map((recipe, idx) => {
                        return <Recipe name={recipe.name} description={recipe.description} imagePath={recipe.imagePath}/>
                    })
                }
            </ul>
        </div>

    )

}