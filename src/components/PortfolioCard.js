import React from "react";

const PortfolioCard = ({ id, url, caption, title, repo }) => {
  return (

      <div className="card-holder" key={id}>
        <a className="card" id={id} href={url} target="_blank" rel="noreferrer">
        <span className="card-caption">{title}</span>
      </a>
      <p>{caption}</p>

        {repo && <a href={repo} target="_blank" rel="noreferrer">Github</a>}

      </div>

  );
};

export default PortfolioCard;
