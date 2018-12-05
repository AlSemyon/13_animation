import React, {Component} from 'react';
import notes from '../notes'
import Note from './Note'
import './style.css'
import { FaPlus } from 'react-icons/fa';
import {generate as id} from 'shortid'

class App extends Component {
    state = {notes: []};

    componentDidMount() {
        this.setState({notes})
    }

    eachNote = (note) => 
        <Note key={note.id} note={note}/>

    render() {
        return (
            <div className="container">
                <div className="grid">
                    {this.state.notes.map(this.eachNote)}
                </div>
            </div>
        )
    }
}

export default App;