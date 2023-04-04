import React from 'react';
import PortfolioCard from './PortfolioCard'
import deflanding from '../images/webdev/Defender-Landing-Pages.pdf'
let developmentCards = [
  {
    id: "inspirations",
    url: "https://af-ls-mj-sg-dp-proj-3.herokuapp.com/",
    caption: "A photo searching and sharing app created to discover, save, share, and socialize about images that inspire",
    repo: "https://github.com/ScottsC0de/proj-3",
    title: "Inspirations / React, GraphQL, Express, Node, Flickr API"
  },
  {
    id: "thevenue",
    url: "https://the-venue.herokuapp.com/spotify",
    caption: "A music blog website created to discover, save, share, and socialize about music",
    repo: "https://github.com/ScottsC0de/the-venue",
    title: "The Venue App / JS, Node, Express, Handlebars, Spotify API, SCSS"
  },
  {
    id: "filmfindr",
    url: "https://mikewebprint.github.io/movie-wishlist/",
    caption: "Search movies by title, read info, watch trailers, and save your favorite movies for later to watch later",
    repo: "https://github.com/MikeWebPrint/movie-wishlist",

    title: "Film Findr App / JS, APIs, Google Fonts, Bootstrap"
  },
  {
    id: "jsquiz",
    url: "https://mikewebprint.github.io/js-quiz-game/",
    caption: "Brush up on your JavaScript knowledge with this timed quiz",
    repo: "https://github.com/MikeWebPrint/js-quiz-game",

    title: "Timed JS Trivia Game / JS, HTML, CSS"
  },
  {
    id: "weather-app",
    url: "https://mikewebprint.github.io/weather-app/",
    caption: "Planning a trip? Check the current weather and 5 day forecast in cities across the US",
    repo: "https://github.com/MikeWebPrint/weather-app",

    title: "Weather Dashboard / JS, APIs, Bootstrap"
  },  {
    id: "deflanding",
    url: deflanding,
    caption: "",
    title: "Brand Landing Pages / Magento",
    examples: ['https://thenorthstargroupinc.com/',]
  },
  {
    id: "cbd",
    url: "https://quitesimplycbdct.com/",
    caption: "",
    title: "CBD Storefront / CMS"
  }
]

const Development = () => {
  return (<section id="dev" className="portfolio">
    <h3>Web Development</h3>
    <div className="card-row">
      {
        developmentCards.map(({ id, url, caption, title, repo, examples }) => {
          return <PortfolioCard key={id} id={id} url={url} caption={caption} title={title} repo={repo} examples={[examples]}/>
        })
      }
    </div>
  </section>)
}

export default Development