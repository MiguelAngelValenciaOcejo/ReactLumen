import React, { Component } from 'react';

class AddModule extends Component{
    render(){
        return(
            <div className="input-group mb-3 data-input">
                <input id="data" type="text" className="form-control " placeholder="Type Your Data" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>this.props.createTest(document.getElementById('data').value)}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddModule;