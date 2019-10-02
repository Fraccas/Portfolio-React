import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <div style={{ textAlign: 'center' }}>
            <img
              src={window.location.origin + "/media/nature.png"}
              alt="avatar"
              style={{ height: '250px' }}
            />
          </div>

          <div className="banner-text" style={{width: '75%'}}>
            <h4 style={{ color: 'grey', paddingTop: '1em' }}>Software Development</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p style={{padding: '2em'}}>Hello, my name is James Dalton Ward and I'm a full stack developer. I studied Computer Science at Jeff State, and I studied Full Stack Web Development at Covalence. I specalize in React, Node, Express, and MySQL.</p>

            <h4 style={{ color: 'grey', paddingTop: '1em' }}>Personal Life</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p style={{padding: '2em'}}>In my free time I develop video games, kayak, and backpack. I'm a successful 2018 Appalachian Trail thru-hiker. 
            I hiked 2,200 miles from GA to ME over a 6 months period! </p> 

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h3 style={{ color: 'grey', paddingTop: '1em' }}>Address</h3>
            <p>982 24th Street Ogden, Utah 84401</p>
            <h3 style={{ color: 'grey', paddingTop: '1em' }}>Phone</h3>
            <p>(256) 749-3166</p>
            <h3 style={{ color: 'grey', paddingTop: '1em' }}>Email</h3>
            <p>daltonward1@yahoo.com</p>
            <h3 style={{ color: 'grey', paddingTop: '1em' }}>Previous Portfolio</h3>
            <p><a href="devfraccas.com">DevFraccas</a></p>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default About;
