import Recipe from '../Component/Recipe'
import React from "react";
  
const About = () => {
  return (
    <div>

    {/* form for query */}
<form onSubmit={props.handleSubmit}>
<label htmlFor="queryDetail">Recipe</label>
    <input
      id='queryDetail'
      type='text'
      value={props.queryDetail}
      onChange={props.handleChange}
      />
      <input
        type='submit'
        value='Find Recipes'
        />
</form>
        <a href={props.searchURL}>{props.searchURL}</a>
        
                  {props.recipes&&

                    props.recipes.meals.map((data,i)=>
      <Recipe  recipe={data} key={i}/>
      )
      }
</div>

  );
};
  
export default About;