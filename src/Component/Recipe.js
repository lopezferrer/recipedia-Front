import React, {Component} from 'react'

function Recipe (props){
    return <>
        <h1>{props.recipe.strMeal}</h1>
        <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal}/>
            </>
        
    


}



export default Recipe