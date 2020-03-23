import React, { Component } from 'react';
import { Fragment } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalist: ""
        };
    };

    // Hook into component mount
    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        console.log('Trying to fetch data');
        fetch('http://universities.hipolabs.com/search?name=southwest')
            .then(data => data.json())
            // .then(data => console.log(`Response:\n${data}`))
            .then(data => this.setState({ datalist: data }))
    };

    // Method to render this component
    render() {
        console.log(this.state.datalist);
        return (
            <Fragment>
                <h1>App Container Online</h1>
                {
                    this.state.map((data)=>{
                   
                }
            </Fragment>
        )
    };
};

export default AppContainer;