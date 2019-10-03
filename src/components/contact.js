import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>James Ward</h2>
            <img
              src={window.location.origin + "/media/katahdin.PNG"}
              alt="avatar"
              style={{height: '250px', borderRadius: '15px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>The photo shown above is from my successful 2018 Appalachian Trail thru-hike. This is the final day of my epic six month, 2200 mile long backpacking trip from Georgia to Maine.</p>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>The Appalachian Trail passes through 14 different states: GA, TN, NC, VA, WV, MD, PA, NJ, NY, CT, MA, VT, NH, ME. </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontFamily: 'Anton'}}>
                    <div className="contact-item">
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (256) 749-3166 
                    </div>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontFamily: 'Anton'}}>
                    <div className="contact-item2" style={{whiteSpace:"nowrap"}}>
                      <i className="fa fa-envelope"aria-hidden="true"/>
                    daltonward1@yahoo.com
                    </div>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontFamily: 'Anton'}}>
                    <div className="contact-item">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                      /jamesdaltonward/
                    </div>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
