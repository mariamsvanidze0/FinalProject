import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <li>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <img src={recipe.thumbnail_url} alt={recipe.name} />
      <button onClick={handleViewDetails}>View Details</button>
    </li>
  );
};

export default RecipeItem;
