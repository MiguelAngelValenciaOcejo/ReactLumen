import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tests from './components/tests';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tests : []
    }  
    this.getTests();  
  }
  render(){
  return (
      <div className="App container">
        
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Data
              </th>  
            </tr>
          </thead>
          <tbody>
              {this.state.tests.map(test=><Tests test={test} key={test.id}/>)}
          </tbody>
        </table>
      </div>
    );
  }

  //functions
  getTests = () => {
    fetch('http://localhost:8000/test').then(res => res.json()).then(tests => this.setState({tests:tests})).catch();
  }
}

export default App;
