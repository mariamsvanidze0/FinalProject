import React, { useState } from 'react';
import './index.css';

const RecipeDetailUI = ({ recipe }) => {
  const [showNutrition, setShowNutrition] = useState(false);

  const handleButtonClick = () => {
    setShowNutrition(!showNutrition);
  };

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={recipe.thumbnail_url} alt={recipe.name} className="recipe-image" />
      <p>{recipe.description}</p>
      <div className="recipe-video">
        {recipe.original_video_url && (
          <div>
            <video controls>
              <source src={recipe.original_video_url} type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction.display_text}</li>
          ))}
        </ol>
        <p>Total Time: {recipe.total_time_minutes} minutes</p>
        <p>Prep Time: {recipe.prep_time_minutes} minutes</p>
        <p>Cook Time: {recipe.cook_time_minutes} minutes</p>
      </div>
      <div>
        <button onClick={handleButtonClick} className="nutrition-button">
          {showNutrition ? 'Hide Nutrition Info' : 'Show Nutrition Info'}
        </button>
      </div>
      {showNutrition && recipe.nutrition && (
        <div className="nutrition-info">
          <h3>Nutrition Info:</h3>
          <p>Calories: {recipe.nutrition.calories}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailUI;
