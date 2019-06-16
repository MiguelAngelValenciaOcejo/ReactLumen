import React, { Component } from 'react';

class Tests extends Component{
    render(){
        return(
            <tr className="Test">
                <td>{this.props.test.id}</td>
                <td>{this.props.test.data}</td>
            </tr>
        );
    }
}

export default Tests;