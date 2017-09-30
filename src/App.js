import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

var os = window.require('os') // not be : var os = require('os')
console.log("got:",os.cpus())

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testContent: '---Test---'
        };
    }

    testOCR = () => {
        console.log('testOCR');
        fetch('https://aip.baidubce.com/rest/2.0/ocr/v1/general', {
            method      : 'POST',
            credentials : 'include',
            body        : {
                image: ''
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((responseText) => {
            console.log('responseText', responseText);
        })
        .catch((error) => {
            console.log('error', error);
        });
        this.setState({
            testContent: 'result'
        });
    }

    render() {
        const { testContent } = this.state;
        return (
            <div className="App">
                {/*<header className="App-header canDrag">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>*/}
                <div>
                    <button onClick={this.testOCR}>Test</button>
                    <p>{testContent}</p>
                </div>
            </div>
        );
    }
}

export default App;
