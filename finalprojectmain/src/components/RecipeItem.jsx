import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <li className="recipe-item">
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <img src={recipe.thumbnail_url} alt={recipe.name} className="recipe-thumbnail" />
      <button onClick={handleViewDetails} className="view-details-button">View Details</button>
    </li>
  );
};

export default RecipeItem;
