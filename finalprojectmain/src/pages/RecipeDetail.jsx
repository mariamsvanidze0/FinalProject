import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipeDetailUI from '../components/RecipeDetailUI';

const RecipeDetail = () => {
  const { id } = useParams();
  const { data: recipe, error, isLoading } = useFetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {recipe ? (
        <RecipeDetailUI recipe={recipe} />
      ) : (
        <div>No recipe details found</div>
      )}
    </div>
  );
};

export default RecipeDetail;
