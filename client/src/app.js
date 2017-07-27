import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './store';
import { DataGrid } from './data.grid';
import { CsvLoader } from './loader';


export class App extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <Router>
                <div>
                <h1>CSV Processor</h1>
                <div>
                    <ul>
                        <li><Link to="/loader">Loader</Link></li>
                        <li><Link to="/result">Data</Link></li>
                    </ul>
                </div>
                <hr />
                <Route path="/loader" component={CsvLoader}/>
                <Route path="/result" component={DataGrid}/>
            </div>
                
            </Router>);
    }
}




