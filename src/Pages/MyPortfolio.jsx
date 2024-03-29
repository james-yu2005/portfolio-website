import amode from '/static/images/amode.png'
import disney from '/static/images/disney.png'
import image from '/static/images/design.png'
import rubber from '/static/images/rubber.png'
import parts from '/static/images/parts.png'
import diagnostic from '/static/images/diagnostic.png'

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
         
        </div>
      </div>
      <div className="portfolio--section--container">
        
      <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={amode} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Ultrasound Imaging</h3>
                <p className="text-md">C++ algorithm that utlizes formulas for ultrasound amode beamforming to transform datasets into Excel graphs</p>
              </div>
              <p className="text-sm portfolio--link">
              <a className="arrow-button" href='https://github.com/james-yu2005/Ultrasound-Amode-Beamforming' target='_blank'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>

          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={disney} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Disney+ 2.0</h3>
                <p className="text-md">Dynamic DisneyPlus Clone built with React.js, Node.js, Express.js, Tailwind CSS, API connection, and customized homepage</p>
              </div>
              <p className="text-sm portfolio--link">
              <a  className="arrow-button" href='https://james-home.vercel.app' target='_blank'>
                <svg  
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>
      
          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={image}  alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Biothermal Gloves</h3>
                <p className="text-md">Glove prototype designed for patients with hypoesthesia that alerts users of critical temperature thresholds</p>
              </div>
              <p className="text-sm portfolio--link">
              <a className="arrow-button" href='https://github.com/james-yu2005/Biothermal-Gloves' target='_blank'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>
       
        
            
          
      </div>

   <div className='section--two'>
      <div className="portfolio--container-box">
        
        <div>
         
        </div>
      </div>
      <div className="portfolio--section--container">
        
        
      <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={rubber} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Table Tennis Webscraper</h3>
                <p className="text-md">Python webcraper for table tennis websites that scrapes sales and outputs them in CSV and Excel file</p>
              </div>
              <p className="text-sm portfolio--link">
              <a className="arrow-button" href='https://github.com/james-yu2005/TableTennisWebscraper' target='_blank'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>

          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={diagnostic} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Diagnostic Test Analysis</h3>
                <p className="text-md">C++ program that calculates the true positive and true negative rate of different data</p>
              </div>
              <p className="text-sm portfolio--link">
              <a  className="arrow-button" href='https://github.com/james-yu2005/Diagnostic-test-analysis' target='_blank'>
                <svg  
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>

          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={parts}  alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Goose Puzzle</h3>
                <p className="text-md">3D modelled goose on Solidworks with printed parts through and IKEA-style manual for easy assembly</p>
              </div>
              <p className="text-sm portfolio--link">
              <a className="arrow-button" href='https://github.com/james-yu2005/Goose-puzzle' target='_blank'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>
       
          </div>
            
          
      </div>
    </section>
  );
}
