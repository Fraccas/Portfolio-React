import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover', fontWeight: 'bold'}} ></CardTitle>
            <CardText>
            <h5>Full Stack Blog</h5>
            Full Stack Blog built with React, Node, Express, and MySQL deployed to the cloud platform, Heroku. Login/Regristion secured with Node Crypto and JSON Web Token (JWT). Secure payments supported by Stripe API.
            </CardText>
            <CardActions border>
              <Button colored><a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Fraccas/3rdPartyAPIs/tree/master/Blog-Stripe">GitHub</a></Button>
              <Button colored><a target="_blank" style={{textDecoration:'none'}} href="https://afternoon-basin-48933.herokuapp.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
            <CardText>
              <h5>React Based Portfolio</h5>
              A React Web App that displays my resume, background information, education, and interests. You're currently looking at it!
              </CardText>
            <CardActions border>
              <Button colored><a target="_blank" style={{textDecoration:'none'}} href="https://github.com/Fraccas/Portfolio-React">GitHub</a></Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Unity</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is HTML5/CSS3 and PHP</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Unity Game Engine</Tab>
          <Tab>HTML5/CSS3 & PHP</Tab>
          <Tab>MongoDB</Tab>
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
