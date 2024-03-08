import data from "/src/data/index2.json";

export default function MyPortfolio2() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title"></p>
          
          
        </div>
      
         
        
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
                
              <div className="button--glow">
                <a  href={item.links} target="_blank">
                <button class="glow-on-hover" type="button">Go to</button>
                </a>
                </div>
                
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
               
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
