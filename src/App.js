import {Component} from "react";
import React from "react";
import Table from './Table';

class App extends Component {

    state = {
        characters:[
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
        ]
    };

    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i!== index;
            })
        })
    };

    render() {

        const characters = this.state.characters;

        return (
            <div className="container">
                <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
            </div>
        )
    }
}

export default App;