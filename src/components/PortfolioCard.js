import React from "react";
const PortfolioCard = ({ id, url, caption, title, repo, examples }) => {
  return (

      <div className="card-holder" key={id}>
        <a className="card" id={id} href={url} target="_blank" rel="noreferrer">
        <span className="card-caption">{title}</span>
      </a>
      <p>{caption}</p>

        {repo && <a href={repo} target="_blank" rel="noreferrer">View code</a>}
        {/* {examples && {...examples.map(example => (
          <a href={example} key={example} target="_blank" rel="noreferrer">{example}</a>
        ))}
        } */}

      </div>

  );
};

export default PortfolioCard;
