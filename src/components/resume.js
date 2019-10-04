import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={window.location.origin + "/media/linkedin.png"}
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ textAlign: 'center', paddingTop: '0.2em'}}>James Ward</h2>
            <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Hello, my name is James Dalton Ward and I'm a full stack developer specializing in MySQL, Express, React, and Node. 
              I have two years of education in OOP languages and concepts, as well as training in full stack web development at a coding bootcamp.
              Over the past two years I have created and maintained sites for local businesses. I'm also a successful 2018
              Appalachian Trail thru-hiker. I hiked 2,200 miles from GA to ME over a 6 months period!</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>982 24th Street Ogden, Utah 84401</p>
            <h5>Phone</h5>
            <p>(256) 749-3166</p>
            <h5>Email</h5>
            <p>daltonward1@yahoo.com</p>
            <h5>Web</h5>
            <p>devfraccas.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <div className="linkedin-holder" style={{textAlign: 'center'}}> 
              <div style={{textAlign: 'left', marginLeft: '0.8em'}} className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="jamesdaltonward"><a className="LI-simple-link" href='https://www.linkedin.com/in/jamesdaltonward?trk=profile-badge'>James Dalton Ward</a></div>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              major={"Computer Science"}
              schoolName="Jefferson State"
              schoolDescription="Jefferson State Community College is location in Birmingham, AL. I studied Computer Science for two years where I learned the fundamentals of Object Oriented Programming using Java."
            />

            <Education
              major={"Full Stack Web Development"}
              schoolName="Covalence"
              schoolDescription="Covalence is a coding bootcamp located in Birmingham, AL. During my four months of intense training in Full Stack Web Development I studied React, React Native, NodeJS, 
              Express, MySQL, JavaScript, TypeScript, HTML5/CSS, Bootstrap, Heroku, Git, GitHub, 3rd Party APIs, REST APIs Agile Development, and NPM."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Work Experience</h2>

            <Experience
              startYear={2017}
              endYear={"Current"}
              image={"devfraccas.png"}
              jobName="DevFraccas - Web Developer"
              jobDescription="DevFraccas provides web based services in the central Alabama area for small businesses. I have over two years of experience creating websites using HTML5/CSS3, Bootstrap, JavaScript, PHP, and MySQL."
            />

          <Experience
              startYear={2016}
              endYear={"Current"}
              image={"avflores.jpg"}
              jobName="Scops Thesis - Web/Application Developer"
              jobDescription="Worked closely with a design team to create seamless UI and backend services across the board from web to mobile applications."
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Projects</h2>
            <Experience
              startYear={2019}
              endYear={"Current"}
              jobName="Masters of Drakoria"
              jobDescription="MoD is an online multiplayer dragon tamer game built on the Unity Game Engine using C#."
              link={<a href="https://www.indiedb.com/games/masters-of-drakoria">IndieDB</a>}
            />

            <Experience
              startYear={2019}
              endYear={"Current"}
              jobName="Full Stack Blog"
              jobDescription="Full Stack Blog built with React, Node, Express, and MySQL deployed to the cloud platform, Heroku. Login/Regristion secured with Node Crypto and JSON Web Token (JWT). Secure payments supported by Stripe API."
              link={<a href="https://afternoon-basin-48933.herokuapp.com/">Heroku App</a>}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
