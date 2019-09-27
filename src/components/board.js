import React, { Component } from 'react';
import './board.css';
import Note from './note'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [       
      ]
    }
  }

  addNote() {
    this.state.notes.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }

  deleteNote(id)
  {
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => 
    {
      if (id == note.id) {
        newNoteArr.splice(index, 1);
      }
    });
    this.setState(
    {
      notes: newNoteArr
    });
  }
  render() {
    return (
      <div className="div-board">
        <div className="row">
          {
            this.state.notes.map(note => {
              return <Note 
              key={note.id} 
              id={note.id} 
              deleteHandler=
              {
                this.deleteNote.bind(this)
              } 
              title={note.title} 
              body={note.body} 
              />
            })
          }
        </div>
      <div>
        <button 
        className="btn btn-success add-button" 
        onClick={this.addNote.bind(this)}>Add</button>

      </div>
    </div>
    );
  }
}

export default Board;