import React from 'react';
import useFetch from '../hooks/useFetch';
import RecipeItem from '../components/RecipeItem'; 

const Recipes = () => {
  const { data, error, isLoading } = useFetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !Array.isArray(data.results)) {
    return <div>No recipes found</div>;
  }

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {data.results.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
