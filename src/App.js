import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">James Ward</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/" onClick={() => this.hideToggle()}>James Ward</Link>}>
            <Navigation>
              <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
              <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <div className="page-h" style={{height: '100%'}}></div>
            </div>
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }

  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }
  
}

export default App;
