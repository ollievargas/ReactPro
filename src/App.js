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
        {name: "Godzilla!"}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      userinput: [
        {name: event.target.value}
      ]
    })
  }




  render() {
    const style = {
      backgroundColor: 'cyan',
      padding: '9px'
    }
    return (
      <div className="App">
        <h1>This is my first React App!!!</h1>
        <p>random text</p>
        <button style={style} onClick={() => this.eventHandler("name")}>Switch Name</button>
        <Compo name={this.state.userinput[0].name} changed={this.nameChangedHandler}/>
        <Compotwo name={this.state.userinput[0].name}/>
        <Compotwo />
        <Compotwo />
        <Compotwo />
      </div>
    );
  }
}
export default App;

