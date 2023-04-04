import React from 'react';
import PortfolioCard from './PortfolioCard';
import MemDaySale from '../images/web-email-graphics/Mem-Day-Sale.pdf';
import BoatShowPower from '../images/web-email-graphics/boat-show-power-email.png';
import BoatShowSail from '../images/web-email-graphics/boat-show-sail-email.png';
import Banners from '../images/web-email-graphics/googleposts.pdf'
let graphicsCards = [
  {
    id: "MemDay",
    url: MemDaySale,
    title: "Memorial Day Sale Catalog, Defender Industries, Inc. (pdf)"
  },
  {
    id: "boat-show-power",
    url: BoatShowPower,
    title: "Boat Show Email and Web Campaign - Power Boats"
  },
  {
    id: "boat-show-sail",
    url: BoatShowSail,
    title: "Boat Show Email and Web Campaign - Sail Boats"
  },
  {
    id: "rotators",
    url: Banners,
    title: "Promotional Banners (pdf)"
  },
];

const Graphics = () => {
  return (<section id="web-email-graphics" className="portfolio">
<h3>
  Web Graphics & Email Campaigns
</h3>
<div className="card-row">
  {
        graphicsCards.map(({ id, url, title }) => {
          return <PortfolioCard key={id} id={id} url={url} title={title} />
        })
      }
</div>
</section>)}

export default Graphics