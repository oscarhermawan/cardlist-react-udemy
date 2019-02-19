import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots:robots,
      searchfield:''
    }
  }

  onSearchRobotChange = (event) =>{
    this.setState({searchfield:event.target.value})

  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchRobotChange}/>
        <Cardlist robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
