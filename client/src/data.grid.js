import React, { Component } from 'react';
import axios from 'axios';

export class DataGrid extends Component {
    constructor(props){
        super(props);
        this.state = {data:[]};
    }

    componentDidMount(){
        axios
            .get('http://localhost:3000/user',{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(response => {
                console.log(response.data[0].name); 
                
                this.setState({data: response.data});
                
            })

    }
    render(){
        let gridItems = this.state.data.map((item) =>{
            return (<tr key = {item.id}>
                        <td>{item.Name}</td>
                        <td>{item.Surname}</td>
                        <td>{item.Email}</td>
                    </tr>);
        });

        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {gridItems}
                </tbody>
                </table>
                <h3>Total: {this.state.data.length}</h3>
            </div>
        );
    }
}