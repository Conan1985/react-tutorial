import React from 'react';
import {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    )
};

const TableBody = () => {
    return (
        <tbody>
        <tr>
            <td>Name1</td>
            <td>Job1</td>
        </tr>
        <tr>
            <td>Name2</td>
            <td>Job2</td>
        </tr>
        <tr>
            <td>Name3</td>
            <td>Job3</td>
        </tr>
        <tr>
            <td>Name4</td>
            <td>Job4</td>
        </tr>
        </tbody>
    )
};

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}

export default Table;