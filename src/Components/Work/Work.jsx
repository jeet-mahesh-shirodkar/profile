import React, { useEffect ,useState} from "react";
import { Button, Card, CardGroup } from "semantic-ui-react";
import './Work.css';
import particlesConfig from '../../particles-config';
import Particles from 'react-particles-js';
import { Fragment } from "react";

const Work = () => {

    const [latestData, setLatestData] = useState([]);
    const [updatedData, setUpdatedData] = useState([]);

    useEffect( ()=>{
        const fetchGitRepos = async()=>  {await fetch("https://api.github.com/users/jeet-mahesh-shirodkar/repos")
                                                .then(response => response.json())
                                                .then(data => {
                                                    let updatedData = [];
                                                    let latestData = [];
                                                    latestData.push(data.sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at)));
                                                    updatedData.push(latestData[0].slice(0,6));
                                                    setLatestData(latestData);
                                                    setUpdatedData(updatedData[0]);
                                                    console.log(updatedData[0]);
                                                });
                                            }
                    fetchGitRepos();
    },[]);

    return(
    <React.Fragment>
        <div className="project__parent">
            <div className="work__header"></div>
            <div className="industrial__projects">
                <h1 className="industrial__header">Industrial.</h1>
                    <div className="Text">
                        <p>I am <b>FrontEnd Developer</b> at <b>Tata Consultancy Service, India</b> with designation of <b>System Engineer</b>.</p>
                        
                            <Fragment>
                        <ul>
                            <li>Developed and maintained the web applications for <a href="https://www.statefarm.com" target="_blank"><b>Statefarm</b></a>
                            - U.S based Insurance Company.</li>
                            <li>Adopted <b>Agile methodology</b> of software development and delivering the application changes 
                                according client requirement.</li>
                            <li>Created and scripted CI-CD pipeline using <b>Jenkins</b> and groovy.</li>
                            <li>Received <a href="https://drive.google.com/file/d/1IqIHYwG37gkNaM1fKofws6EvdGlzhzk-/view?usp=sharing" target="_blank"><b>LIREL award</b></a> - A leader with integrity,respecting every individual.</li>
                            <li>Appreciation for adopting new technology and delivering the <a href="https://drive.google.com/file/d/1KSEh_y54L0xj6DtLVjHwyisfT8HAc_4Q/view?usp=sharing" target="_blank"><b>Migration Project</b></a> on time.</li>
                        </ul>
                            </Fragment>
                        
                    </div>
                    <div className="Awards">

                    </div>
            </div>
            <div className="gitHub">
                <h1 className="github__header">Github.</h1>
                <CardGroup>
                    {
                        updatedData.map((i,el)=> (            
                            <Card key={el} onClick={(e)=> window.open(i.html_url)}
                                  color="yellow">
                            <Card.Content>
                              <Card.Header>{i.name}</Card.Header>
                              <Card.Meta>{i.language}</Card.Meta>
                              <Card.Description>
                                    {i.description}
                              </Card.Description>
                              {i.homepage && <Button basic color='yellow' onClick={(e)=>window.open(i.homepage)}>Prototype</Button>}
                            </Card.Content>
                          </Card>
                          )
                        )
                    }
                </CardGroup>
            </div>
            <div className="articles">
                <h1 className="articles__header">Medium.</h1>
                <CardGroup>           
                            <Card color="violet" onClick={(e)=> window.open('https://medium.com/@shirodkar.jeet.15ee5062/arithmetic-in-javascript-85f8e30bbb25')}>
                            <Card.Content>
                              <Card.Header>/arithmetic-in-javascript</Card.Header>
                              <Card.Meta>medium article</Card.Meta>
                              <Card.Description>
                                    Listed Arithmetic Operations with JS
                              </Card.Description>
                              <Button basic color='violet' onClick={(e)=>window.open('https://medium.com/@shirodkar.jeet.15ee5062/arithmetic-in-javascript-85f8e30bbb25')}>Prototype</Button>
                            </Card.Content>
                          </Card>
                          <Card color="violet" onClick={(e)=>window.open('https://medium.com/@shirodkar.jeet.15ee5062/javascript-typeof-undefined-and-null-d8fa977d1f9f')}>
                            <Card.Content>
                              <Card.Header>/javascript-typeof-undefined-and-null</Card.Header>
                              <Card.Meta>medium article</Card.Meta>
                              <Card.Description>
                                    Undefined null check-up
                              </Card.Description>
                              <Button basic color='violet' onClick={(e)=>window.open('https://medium.com/@shirodkar.jeet.15ee5062/javascript-typeof-undefined-and-null-d8fa977d1f9f')}>Prototype</Button>
                            </Card.Content>
                          </Card>
                </CardGroup>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Work;