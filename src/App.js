import React, { Component } from 'react'
import ImageFitter from './components/Image-fitter/image-fitter'
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {input: null};
  }

  handleLink = (e) =>{
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <input className="input__link" placeholder="Put image address here" onChange={this.handleLink}/>
        <ImageFitter src={this.state.input} width={400}/>
      </div>
    );
  }
}

export default App;
