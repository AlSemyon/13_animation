import React, {Component} from 'react';
import notes from '../notes'
import Note from './Note'
import './style.css'
import Form from './Form';
import { CSSTransition } from 'react-transition-group'

class App extends Component {s
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
        <Note key={note.id} note={note} removeNote={() => this.removeNote(note.id)}/>

    render() {
        return (
            <div className="container">
            <Form addNote={this.addNote}/>
                    <CSSTransition
                        component="section"
                        transitionName="slide"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        transitionAppearTimeout={500}
                        transitionAppear={true}
                        className="list-notes">
                        {this.state.notes.map(this.eachNote)}
                    </CSSTransition>
            </div>
        )
    }
}

export default App;