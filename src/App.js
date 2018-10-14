import {Component} from "react";
import React from "react";
import Table from './Table';

class App extends Component {
    render() {

        const characters = [
            {
                'name': 'name1',
                'job': 'job1'
            },
            {
                'name': 'name2',
                'job': 'job2'
            },
            {
                'name': 'name3',
                'job': 'job3'
            },
            {
                'name': 'name4',
                'job': 'job4'
            }
        ];

        return (
            <div className="container">
                <Table characterData = {characters}/>
            </div>
        )
    }
}

export default App;