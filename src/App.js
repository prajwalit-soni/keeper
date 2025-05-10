import Header from './header';
import Footer from './footer';
import Note from './note';
import React, { useState } from 'react';
import CreateArea from './CreatArea';
import './style.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <CreateArea onAdd={addNote} />
        <div className="note-container">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
