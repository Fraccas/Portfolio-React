import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
          {this.setImage()}
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
          <p>{this.props.link}</p>
        </Cell>
      </Grid>
    )
  }

  setImage = () => {
    if (this.props.image) 
    return (
      <img
        src={window.location.origin + '/media/' + this.props.image}
        alt="avatar"
        style={{ height: '90px', weight: '180px' }}
      />
    );
  }
}

export default Experience;
