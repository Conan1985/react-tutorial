import React from 'react';
import {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name1</td>
                    <td>job1</td>
                </tr>
                <tr>
                    <td>name2</td>
                    <td>job2</td>
                </tr>
                <tr>
                    <td>name3</td>
                    <td>job3</td>
                </tr>
                <tr>
                    <td>name4</td>
                    <td>job4</td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;