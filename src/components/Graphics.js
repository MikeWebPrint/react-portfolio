import React from 'react';
import PortfolioCard from './PortfolioCard';
import MemDaySale from '../images/web-email-graphics/Mem-Day-Sale.pdf';
import BoatShowPower from '../images/web-email-graphics/boat-show-power.pdf';
import BoatShowSail from '../images/web-email-graphics/boat-show-sail.pdf';
import Banners from '../images/web-email-graphics/googleposts.pdf'
let graphicsCards = [
  {
    id: "MemDay",
    url: MemDaySale,
    caption: "Memorial Day Sale Catalog, Defender Industries, Inc. (pdf)"
  },
  {
    id: "boat-show-power",
    url: BoatShowPower,
    caption: "Boat Show Email and Web Campaign - Power Boats (pdf)"
  },
  {
    id: "boat-show-sail",
    url: BoatShowSail,
    caption: "Boat Show Email and Web Campaign - Sail Boats (pdf)"
  },
  {
    id: "rotators",
    url: Banners,
    caption: "Promotional Banners (pdf)"
  },
];

const Graphics = () => {
  return (<section id="web-email-graphics" className="portfolio">
<h3>
  Web Graphics & Email Campaigns
</h3>
<div className="card-row">
  {
        graphicsCards.map(({ id, url, caption }) => {
          return <PortfolioCard key={id} id={id} url={url} caption={caption} />
        })
      }
</div>
</section>)}

export default Graphics