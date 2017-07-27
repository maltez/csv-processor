import React, { Component } from 'react';
import FileUpload from 'react-fileupload';

export class CsvLoader extends Component {

    render(){
        const options={
            baseUrl:'http://127.0.0.1:3000/csv',
            requestHeaders: {'content-type': 'text/csv'}
        }

        return(
            <div>
                <FileUpload options={options}>
                    <button ref="chooseBtn">choose</button>
                    <button ref="uploadBtn">upload</button>
                </FileUpload>
            </div>
        );
    }
}
