import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import logo from './logo.svg'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fusTheme from './fusTheme';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';


injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  render() {
    return (
      <BrowserRouter>
      <MuiThemeProvider muiTheme ={getMuiTheme(fusTheme)}>
      <div className="App">
       <AppBar
        title="Title"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
         onLeftIconButtonClick ={this.handleToggle}
       />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to ="/"><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
          <Link to ="/about"><MenuItem onClick={this.handleClose}>About</MenuItem></Link>
        </Drawer>
    </div>
    <Route exact path="/" render = { () => <h1> Home view </h1> }/>
    <Route exact path="/about" render = { () => <h1> About view </h1> }/>
    </MuiThemeProvider>     
    </BrowserRouter>
    );
  }
}

export default App
