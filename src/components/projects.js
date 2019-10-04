import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){ // React
      return( 
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'} }>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/media/blog2.png) center / cover', fontWeight: 'bold'}} ></CardTitle>
            <CardText>
            <h5 style={{fontWeight:'bold'}}>Full Stack Blog</h5>
            Full Stack Blog built with React, Node, Express, and MySQL deployed to the cloud platform, Heroku. Login/Regristion secured with Node Crypto and JSON Web Token (JWT). Secure payments supported by Stripe API.
            </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/3rdPartyAPIs/tree/master/Blog-Stripe">GitHub</a></Button>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://afternoon-basin-48933.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/media/portfolio.png) center / cover'}} ></CardTitle>
            <CardText>
              <h5 style={{fontWeight:'bold'}}>React Based Portfolio</h5>
              A React Web App that displays my resume, background information, education, and interests. This React App is hosted on the Heroku Clould Platform. Technologies include HTML5/CSS3, JS, React, Bootstrap, and NPM.
              </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/Portfolio-React">GitHub</a></Button>
              <Button colored><a style={{textDecoration:'none'}} href="/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/media/react-native.jpg) center / cover'}} ></CardTitle>
            <CardText>
              <h5 style={{fontWeight:'bold'}}>React Native Mobile Blog</h5>
              Full Stack React Native Mobile Blog App using Node/Express/MySQL for the backend. Deployed to Android and iOS using Expo. Shares backend security with the full stack blog hosted on Heroku using Node Crypto and JWT.    
              </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/ReactNative/tree/master/StarterProject">GitHub</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if(this.state.activeTab === 1) { // Unity
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media.indiedb.com/images/games/1/70/69168/media_banner.png) center / cover', fontWeight: 'bold'}} ></CardTitle>
            <CardText>
            <h5 style={{fontWeight:'bold'}}>Masters of Drakoria</h5>
            Masters of Drakoria is an online open-world creature taming game built with the Unity Game Engine using C#. Fight against wild creatures or other players in this world of dragons and beasts.
            </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/">GitHub</a></Button>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://www.indiedb.com/games/masters-of-drakoria">Website</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media.indiedb.com/images/games/1/65/64741/button_update.png) center / cover'}} ></CardTitle>
            <CardText>
              <h5 style={{fontWeight:'bold'}}>Roast Party</h5>
              Roast Party is a standalone application built with Unity/C#, as well as a website using HTML5/CSS3, Bootstrap, JS, PHP, and MySQL. This online multiplayer party game is a blast to play with your friends!
              </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/">GitHub</a></Button>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://www.indiedb.com/games/roast-party">Website</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) { // Web Sites 
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/media/xa.png) center / cover', fontWeight: 'bold'}} ></CardTitle>
            <CardText>
            <h5 style={{fontWeight:'bold'}}>Xtreme Athletics</h5>
            Xtreme Athletics is a Gymnastics Center based in Opelika, AL. I had a one year contract with XA to redesign and create their site from scratch. Their site was built with HTML5/CSS3, JS, Bootstrap, PHP, and MySQL.
            </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/">GitHub</a></Button>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="http://devfraccas.com/xtremeathleticsauburn/new_website/index.html">Website</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/media/roastparty.png) center / cover'}} ></CardTitle>
            <CardText>
              <h5 style={{fontWeight:'bold'}}>Roast Party</h5>
              Roast Party is a standalone application built with Unity/C#, as well as a website using HTML5/CSS3, Bootstrap, JS, PHP, and MySQL. This online multiplayer party game is a blast to play with your friends!
              </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/Roast-Party-Web">GitHub</a></Button>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://www.indiedb.com/games/roast-party">Website</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '2em'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(/media/devfraccas.png) center / cover'}} ></CardTitle>
            <CardText>
              <h5 style={{fontWeight:'bold'}}>DevFraccas</h5>
              DevFraccas is an online business that I started in central Alabama to create sites for small businesses in the area. The technology I used for those services include HTML5/CSS3, JS, Bootstrap, PHP, and MySQL.
              </CardText>
            <CardActions border>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="https://github.com/Fraccas/">GitHub</a></Button>
              <Button colored><a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} href="http://devfraccas.com/portfolio.html">Website</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div className="project-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Unity Engine</Tab>
          <Tab>HTML5/CSS3 & PHP</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
