import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tests from './components/tests';
import AddModule from './components/AddModule';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tests : [],
      updatedId : 0
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
              <th>
                
              </th> 
              <th>
                
              </th> 
            </tr>
          </thead>
          <tbody>
              {this.state.tests.map(test=><Tests test={test} deleteTest={this.deleteTest.bind(this)} key={test.id}/>)}
          </tbody>
        </table>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3 data-input">
                    <input id="data" type="text" className="form-control " placeholder="Type Your Data" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={()=>this.props.createTest(document.getElementById('data').value)}>Add</button>
                    </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //functions
  getTests = () => {
    fetch('http://localhost:8000/test').then(res => res.json()).then(tests => this.setState({tests:tests})).catch();
  }
  createTest = (data) => {
    // console.log(data);
    fetch('http://localhost:8000/test',{
      method:"POST",
      body:JSON.stringify({'data':data}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => this.getTests()).catch();
  }
  updateModal= () => {

  }
  deleteTest = (id) => {
    // console.log(id);
    if(window.confirm("sure?")){
      fetch('http://localhost:8000/test',{
        method:"DELETE",
        body:JSON.stringify({'id':id}),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(res => this.getTests()).catch();
    }
  }
}

export default App;
