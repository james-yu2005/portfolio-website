import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiCplusplusbuilder } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <br></br>
            <p className="hero--section-description">
              I'm a motivated individual interested in mastering full-stack development with current experience in C++, Python, Java, MATLAB, MySQL, HTML/CSS, Javascript, React.js, Node.js, Express.js, Next.js, MongoDB, and Tailwind CSS. I'm also passionate about medical research,
               specifically that of vaccine development and drug delivery in research. Outside of academics, I am active in my school community as the social representative
                of my cohort and an executive on the University of Waterloo Table Tennis
                 Team. In my free time, I enjoy hitting the gym, playing table 
                 tennis with friends, and binging Netflix shows. 
              
            </p>
          </div>
        </div>

        <div className="icon--holder">
            <div className="icon--holder-each"> <FaReact /></div>

            <div className="icon--holder-each"> <FaNodeJs/></div>
            <div className="icon--holder-each"> <TbBrandNextjs/></div>
            <div className="icon--holder-each"> <SiTailwindcss/></div>
            <div className="icon--holder-each"> <FaHtml5/></div>
            <div className="icon--holder-each">  <FaCss3Alt/></div>
            <div className="icon--holder-each"> <TbBrandJavascript/></div>
            <div className="icon--holder-each">  <SiCplusplusbuilder/></div>
            <div className="icon--holder-each">  <FaCss3Alt/></div>
            <div className="icon--holder-each">  <FaPython/></div>
            <div className="icon--holder-each"> <FaJava/></div>
        </div>
      </section>
    );
  }
