import React, { useEffect ,useState,useRef} from "react";
import about from '../../Images/about4.jpg';
import Tree from 'react-d3-tree';
import './About.css';

const debugData = [
    {
      name: "Click Node",
      children: [
        {
          name: "HTML",
        },
        {
          name: "CSS",
          children: [
            {
              name: "Framework",
              children: [
                {
                  name: "BootStrap"
                },
                {
                  name: "Materialized UI"
                },
                {
                  name : "Semantic UI"
                }
              ],
            },
            {
              name: "Responsive Web"
            },
            {
              name:"Preprocessors",
              children:[
                {
                  name:"sass"
                }
              ]
            }
          ]
        },
        {
          name: "JavaScript",
          children: [
            {
              name: "Library & Framework",
              children: [
                {
                  name: "React"
                },
                {
                  name: "Leaflet"
                }  
              ],
            },
            {
              name: "Package Manager",
              children: [
                {
                  name: "NPM"
                },
                {
                  name: "Yarn"
                }  
              ]
            },
            {
              name:"Testing",
              children:[
                {
                  name:"Jest"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
const About = () => {

    const [translate, settranslate] = useState({ x: 0, y: 0 });
    const treeContainer = useRef(null);

    useEffect(()=>{
        window.scroll({ top: 0,behavior: 'smooth'});
        const dimensions = treeContainer.current.getBoundingClientRect();
        settranslate({
            x: 60/2,
            y: dimensions.height / 2
          })},[]);

    return(
    <React.Fragment>
        <section id="" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h3>Bio.</h3>
                            <p>
                            I'm front-end developer with analytical and development skills over a year of Industrial experience. 
                            I have worked in an environment of agile methodologies, DevOps deliveries and client interaction.
                            </p>
                            <p>
                            I was taught web development and designing by working in industrial projects and many times, myself 🤓.
                            I also have Bachelor of Engineering in Electronic from Mumbai University 📚.
                            </p> 
                            <p>I believe learning and accepting new logics, Is key to happiness 😉.</p>
                            </div> 
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <div className="image about">
                                <img src={about} className="img-fluid sticky-top" alt="about-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="skill__nodes">
            <h3 className="skill__heading">Skill-Tree.</h3>
                <p>Dragable Component created using d3js-tree source. Sometimes I use D3js or Chartjs for representing the Data 📈.</p>
            <div id="treeWrapper" className= "treeWrapper_class" style={{ width: '100%', height: '30em' }} ref={treeContainer}>
                <Tree data={debugData} translate={translate} orientation={'horizontal'}/>
            </div>
        </div>
    </React.Fragment>
    );
}

export default About;