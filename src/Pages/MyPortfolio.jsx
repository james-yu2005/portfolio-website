import amode from '/public/static/images/amode.png'
import disney from '/public/static/images/disney.png'
import image from '/public/static/images/image.png'
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
              <a href='https://github.com/james-yu2005/Ultrasound-Amode-Beamforming' target='_blank'>
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
                <p className="text-md">Dynamic DisneyPlus Clone built with React.js, Node.js, Express.js, Tailwind CSS, and customized homepage</p>
              </div>
              <p className="text-sm portfolio--link">
              <a href='https://james-home.vercel.app' target='_blank'>
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
              <a href='https://github.com/james-yu2005/Biothermal-Gloves' target='_blank'>
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
    </section>
  );
}
