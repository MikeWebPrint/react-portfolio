import React from 'react';
import PortfolioCard from './PortfolioCard'
import Salembrochure from '../images/print-graphics/Salem-brochure.pdf'
import Salemheritage from '../images/print-graphics/Salem-Heritage-Day-broch.pdf'
import scmc from '../images/print-graphics/SCMC-brochure.pdf'
import starbrite from '../images/print-graphics/Def-SLS22-sponsorbanners-starbrite.jpg'
import tohatsu from '../images/print-graphics/Def-SLS22-sponsorbanners-tohatsu.jpg'
let printCards = [
  {
    id: "SalemTour",
    url: Salembrochure,
    title: "Historical Tourism Brochure, Town of Salem, CT (pdf)"
  },
  {
    id: "scmc",
    url: scmc,
    title: "Brochure, Sisters of Charity of Our Lady, Mother of the Church (pdf)"
  },
  {
    id: "SalemHeritage",
    url: Salemheritage,
    title: "Event Brochure, Salem Bicentennial Heritage Day (pdf)"
  },
  {
    id: "starbrite",
    url: starbrite,
    title: "Event Sponsor Banner - Star brite"
  },
  {
    id: "tohatsu",
    url: tohatsu,
    title: "Event Sponsor Banner - Tohatsu"
  },
]
const Print = () => {
  return (<section id="print" className="portfolio">
    <h3>
      Print Design
    </h3>
    <div className="card-row">
      {
        printCards.map(({ id, url, title }) => {
          return <PortfolioCard key={id} id={id} url={url} title={title} />
        })
      }
    </div>
  </section>)
}

export default Print