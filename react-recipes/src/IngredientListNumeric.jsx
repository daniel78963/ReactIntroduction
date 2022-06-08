import './IngredientList.css'
import React from 'react';
 
function IngredientListNumeric(props)
{
    const ingredientListItems = props.ingredients.map((ingredient, index)=>{
        return (
            <li key={index} className={ingredient.prepared ? 'prepared' : ''}>
                { index + 1 }) { ingredient.name }
                </li>
        );

    });

    return (
        <ul>
            { ingredientListItems }
        </ul>
    );
}

export default IngredientListNumeric;