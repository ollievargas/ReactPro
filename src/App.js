import React, {Component} from 'react';
import './App.css';
import Compo from './UserInput/UserInput';
import Compotwo from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userinput: [
      {name: "Ollie"}
    ]
  }



  eventHandler = () => {
    this.setState ({
      userinput: [
        {name: "Charlie"}
      ]
    })
  }




  render() {
    return (
      <div className="App">
        <h1>This is my first React App!!!</h1>
        <p>random text</p>
        <Compo />
        <Compotwo name={this.state.userinput[0].name}/>
        <Compotwo />
        <Compotwo />
        <Compotwo />
      </div>
    );
  }
}
export default App;
