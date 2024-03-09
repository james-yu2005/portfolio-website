import uxui from '/static/images/uxui.png'
import biotron from '/static/images/biotron.png'
import rocket from '/static/images/rocket.png'
export default function Experience() {
  return (
    <section className="skills--section" id="Experience">
      <div className="portfolio--container">
        <p className="section--title">Experience</p>
       
      </div>
      <div className="skills--section--container">
    
      <div  className="skills--section--card">
            <div className="skills--section--img">
              <img src={biotron} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Enable Team Member - UW Biomechatronics</h3>
              <h4 className='Date'>(Dec. 2023 - Jan. 2024)</h4>
              <p className="skills--section--description">Printed appendages of arm with white resin from Formlabs 3D Printer from Solidworks designs</p>
            </div>
          </div>
          
          <div  className="skills--section--card">
            <div className="skills--section--img">
              <img src={rocket} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Payload Team Member - UW Rocketry </h3>
              <h4 className='Date'>(Dec. 2023 - Jan. 2024)</h4>
              <p className="skills--section--description">Researched payload tubing for delivery of rocket's transfusion pump that integrated backflow prevention solutions</p>
            </div>
          </div>
          
        
      
          <div  className="skills--section--card">
            <div className="skills--section--img">
              <img src={uxui} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">UX/UI Designer - TrueNorthTTC </h3>
              <h4 className='Date'>(Jan. 2022 - Oct. 2022)</h4>
              <p className="skills--section--description">Developed and designed dynamic pages for table tennis club website with HTML/CSS</p>
            </div>
          </div>


      </div>
    </section>
  );
}
