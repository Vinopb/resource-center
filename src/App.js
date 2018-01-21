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
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
    </div>
    </MuiThemeProvider>
    );
  }
}

export default App
