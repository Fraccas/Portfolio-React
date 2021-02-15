import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img

              src={window.location.origin + "/media/linkedin.png"}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text" style={{padding: '1em', marginTop: '20px'}}>
              <h1>Full Stack Web Developer</h1>
              <hr />

              <p style={{marginLeft: '1em', marginRight: '1em'}}>Hello, my name is James Dalton Ward. I'm a full stack web developer, game developer, avid backpacker, and snowboarder!</p>
              <p>C# | ASP.NET | React | React Native | NodeJS | Express | MySQL <br />
              HTML5/CSS3 | Bootstrap | ES6 JavaScript | TypeScript | Heroku | Git</p> 

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/jamesdaltonward/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/Fraccas" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* DevFraccas */}
                <a href="https://store.steampowered.com/app/1193560/Roast_Party/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-share-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a href="https://www.youtube.com/watch?v=qthiV7SgQ3M" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
