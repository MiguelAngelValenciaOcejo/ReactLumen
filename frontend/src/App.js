import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tests from './components/tests';
import AddModule from './components/AddModule';

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
        <AddModule createTest={this.createTest.bind(this)}/>
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
  createTest = (data) => {
    console.log(data);
    fetch('http://localhost:8000/test',{
      method:"POST",
      body:JSON.stringify({'data':data}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => this.getTests()).catch();
  }
}

export default App;
