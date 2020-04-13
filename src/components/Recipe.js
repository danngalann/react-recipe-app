import React from "react";

export default function Recipe(props) {
  
  const { image, url, label, ingredients } = props.recipe;
  return (
    <div className="card blue-grey darken-1">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-content white-text">
        <span className="card-title">{label}</span>
      </div>
      <div className="card-action">
        <a href={url} target="_blank">View Recipe</a>
      </div>
    </div>
  );
}
