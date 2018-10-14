import {Component} from "react";
import React from "react";
import Table from './Table';
import Form from "./Form";

class App extends Component {

    state = {
        characters:[]
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
                <Form/>
            </div>
        )
    }
}

export default App;