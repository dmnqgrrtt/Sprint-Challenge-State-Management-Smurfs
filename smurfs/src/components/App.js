import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm'

import { smurfContext } from '../contexts/smurfContext';

class App extends Component {
  
  state = {
    smurfs: [],
    loading: false,
    error: ''
  }

  updateSmurfs = newSmurfs => {
    this.setState({
      smurfs: newSmurfs,
      loading: false, 
      error: ''
    })
  }

  updateLoading = (loadingMessage) => {
    this.setState({
      loading: loadingMessage
    })
  }

  updateError = (errorMessage) => {
    this.setState({
      error: errorMessage,
      loading: ''

    })
  }

  componentDidMount() {
    this.setState({
      loading: "We are loading you're smurf village."
    })
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('res', res)
        this.setState({
          smurfs: res.data,
          loading: '',
          error: ''
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, we are unable to find your village',
          loading: ''
        })
      })
  }

  render() {
    return (
      <div className="App">
        
        <smurfContext.Provider value = {{state: this.state, updateSmurfs: this.updateSmurfs, loading: this.updateLoading, error: this.updateError}}>
          <h1>SMURF VILLAGE</h1>
          
          <SmurfForm />
    {this.state.loading && <p>{this.state.loading}</p>}
          {this.state.error && <p>{this.state.error}</p>}
          <SmurfsList />
        </smurfContext.Provider>
      </div>
    );
  }
}

export default App;
