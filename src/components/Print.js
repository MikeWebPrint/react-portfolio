import React from 'react';
import PortfolioCard from './PortfolioCard'
import Salembrochure from '../images/print-graphics/Salem-brochure.pdf'
import Salemheritage from '../images/print-graphics/Salem-Heritage-Day-broch.pdf'
import starbrite from '../images/print-graphics/Def-SLS22-sponsorbanners-starbrite.jpg'
import tohatsu from '../images/print-graphics/Def-SLS22-sponsorbanners-tohatsu.jpg'
let printCards = [
  {
    id: "SalemTour",
    url: Salembrochure,
    caption: "Historical Tourism Brochure, Town of Salem, CT (pdf)"
  },
  {
    id: "SalemHeritage",
    url: Salemheritage,
    caption: "Event Brochure, Salem Bicentennial Heritage Day (pdf)"
  },
  {
    id: "starbrite",
    url: starbrite,
    caption: "Event Sponsor Banner - Star brite"
  },
  {
    id: "tohatsu",
    url: tohatsu,
    caption: "Event Sponsor Banner - Tohatsu"
  },
]
const Print = () => {
  return (<section id="print" class="portfolio">
    <h3>
      Print Design
    </h3>
    <div className="card-row">
      {
        printCards.map(({ id, url, caption }) => {
          return <PortfolioCard id={id} url={url} caption={caption} />
        })
      }
    </div>
  </section>)
}

export default Print