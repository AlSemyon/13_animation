import React, {Component} from 'react';
import notes from '../notes'
import Note from './Note'
import './style.css'
import Form from './Form';

class App extends Component {
    state = {notes: []};

    componentDidMount() {
        this.setState({notes})
    }

    addNote = (note) => this.setState({
        notes: [...this.state.notes, note]
    })

    removeNote = id => this.setState(({notes}) => ({
        notes: notes.filter(note => note.id !== id)
    }))

    eachNote = (note) => 
        <Note key={note.id} note={note}/>

    render() {
        return (
            <div className="container">
            <Form addNote={this.addNote}/>
                <div className="grid">
                    {this.state.notes.map(this.eachNote)}
                </div>
            </div>
        )
    }
}

export default App;