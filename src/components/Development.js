import React from 'react';
import PortfolioCard from './PortfolioCard'
let developmentCards = [
  {
    id: "thevenue",
    url: "https://the-venue.herokuapp.com/spotify",
    caption: "The Venue App / JS, Node, Express, Handlebars, Spotify API, SCSS"
  },
  {
    id: "filmfindr",
    url: "https://mikewebprint.github.io/movie-wishlist/",
    caption: "Film Findr App / JS, APIs, Google Fonts, Bootstrap"
  },
  {
    id: "jsquiz",
    url: "https://mikewebprint.github.io/js-quiz-game/",
    caption: "Timed JS Trivia Game / JS, HTML, CSS"
  },
  {
    id: "weather-app",
    url: "https://mikewebprint.github.io/weather-app/",
    caption: "Weather Dashboard / JS, APIs, Bootstrap"
  },
  {
    id: "temo",
    url: "https://www.defender.com/temo.jsp",
    caption: "Brand Landing Page / Bootstrap"
  },
  {
    id: "cbd",
    url: "https://quitesimplycbdct.com/",
    caption: "CBD Storefront / CMS"
  }
]

const Development = () => {
  return (<section id="dev" class="portfolio">
    <h3>Web Development</h3>
    <div className="card-row">
      {
        developmentCards.map(({ id, url, caption }) => {
          return <PortfolioCard id={id} url={url} caption={caption} />
        })
      }
    </div>
  </section>)
}

export default Development