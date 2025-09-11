import React from "react";

const Card = ({ image, title, description, tags, liveLink, codeLink, reverse }) => {
  return (
    <div className={`card ${reverse ? "reverse" : ""}`}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-tags">
          {tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-buttons">
          <a className="btn" href={liveLink}>Live Site</a>
          <a className="btn btn-dark" href={codeLink}>View Code</a>
        </div>
      </div>
    </div>
  );
};

export default Card;