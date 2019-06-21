import React, { Component } from 'react';

class Tests extends Component{
    render(){
        return(
            <tr className="Test">
                <td>{this.props.test.id}</td>
                <td>{this.props.test.data}</td>
                <td>
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
                    Update
                    </button>
                </td>
                <td><a onClick={()=>this.props.deleteTest(this.props.test.id)} className="btn btn-danger">Delete</a></td>
            </tr>
        );
    }
}

export default Tests;