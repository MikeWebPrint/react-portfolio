import React from 'react'

const PortfolioCard = ({id, url, caption}) => {
  return (
    <a
      className="card"
      id={id}
      href={url}
      target="_blank" rel="noreferrer">
      <span className="card-caption">{caption}</span>
    </a>)
}

export default PortfolioCard